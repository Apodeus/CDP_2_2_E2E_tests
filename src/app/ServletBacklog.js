const express = require('express');
const router = express.Router();
const path = require('path');
const jsdom = require('jsdom');
const pathNameFiles = '/../html/Backlog';
const TabBuilder = require('./TabBuilder');
const Home = require('./ServletConnectedHome');
const USDAO = require('./USDAO');
const ProjectDAO = require('./ProjectDAO');


let projectOpened = null;
const valueButtonCreateUS = 'Ajouter une nouvelle issue';

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
    if (projectOpened !== null || req.body.open !== undefined) {
      await (new TabBuilder()).build(dom.window.document);
      const indexProject = projectOpened === null ? parseInt(req.body.data):projectOpened.id;
      const projects = (await (new ProjectDAO(Home.connectionDB))
          .getAllByUser(Home.connectedUser));
      const projectIndex= await projects.findIndex((p) => p.id === indexProject);
      projectOpened=projects[projectIndex];
      module.exports.projectOpened = projectOpened;
      await addUSListToHtml(dom.window.document);
      await addButtonCreate(dom.window.document);
      res.write(dom.serialize());
    }
  });
}
async function addUSListToHtml(document) {
  const listUS = await (new USDAO(Home.connectionDB)).getAllUSByProject(projectOpened);
  const listeHTML = document.getElementById('IssueList');
  console.log(listeHTML);
  await listUS.forEach((us) =>{
    listeHTML.innerHTML+='<li>'+us.toString()+'</li>';
  });
}
function addButtonCreate(document) {
  const button = document.getElementById('AddUs');
  button.value = valueButtonCreateUS;
}
module.exports = router;
