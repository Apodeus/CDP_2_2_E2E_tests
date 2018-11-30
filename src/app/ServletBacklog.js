const express = require('express');
const router = express.Router();
const path = require('path');
const jsdom = require('jsdom');
const pathNameFiles = '/../html/Backlog';
const TabBuilder = require('./TabBuilder');
const Home = require('./ServletConnectedHome');
const USDAO = require('./USDAO');
const ProjectDAO = require('./ProjectDAO');
const UtilsForm = require('./UtilsForm');


let projectOpened = undefined;
router.get('/', async function(req, res) {
  await sendPage(res, res);
  res.end();
});
router.post('/', async function(req, res) {
  await sendPage(res, req);
  res.end();
});
async function sendPage(res, req) {
  await jsdom.JSDOM.fromFile(path.resolve(__dirname+pathNameFiles+'.html'), '').then(async (dom) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (projectOpened !== undefined || req.body.open !== undefined) {
      await (new TabBuilder()).build(dom.window.document);
      const indexProject = projectOpened === undefined ? parseInt(req.body.data):projectOpened.id;
      projectOpened = (await (new ProjectDAO(Home.connectionDB))
          .getAllByUser(Home.connectedUser)).findIndex((p) => p.id === indexProject);
      await addUSListToHtml(dom.window.document);
      res.write(dom.serialize());
    }
  });
}
async function addUSListToHtml(document) {
  const utilsForm = new UtilsForm();
  const listUS = await (new USDAO(Home.connectionDB)).getAllUSByProject(projectOpened);
  const listeHTML = document.getElementById('IssueList');
  await (async () => {
    listUS.forEach((us) =>{
      listeHTML.appendChild(utilsForm.getTexte(document, us.toString()));
    });
  });
}
module.exports = router;
