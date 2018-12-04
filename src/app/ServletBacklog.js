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
const US = require('./US');


const valueButtonCreateUS = 'Ajouter une nouvelle US';
const valueButtonDelete='Supprimer';

router.get('/', async function(req, res) {
  await sendPage(res, res);
  res.end();
});
router.post('/', async function(req, res) {
  if (req.body.delete === valueButtonDelete) {
    const idUs = parseInt(req.body.data);
    const usToDelete= new US('', '', 0, 0, 0, 0);
    usToDelete.id = idUs;
    await (new USDAO(Home.connectionDB).delete(usToDelete));
  } else {
    module.exports.projectOpened = null;
  }
  await sendPage(res, req);
  res.end();
});
async function sendPage(res, req) {
  await jsdom.JSDOM.fromFile(path.resolve(__dirname+pathNameFiles+'.html'), '').then(async (dom) => {
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (module.exports.projectOpened !== null || req.body.open !== undefined) {
      await (new TabBuilder()).build(dom.window.document);
      const indexProject = module.exports.projectOpened === null ?
      parseInt(req.body.data):module.exports.projectOpened.id;
      const projects = (await (new ProjectDAO(Home.connectionDB)).getAllByUser(Home.connectedUser));
      const projectIndex= await projects.findIndex((p) => p.id === indexProject);
      module.exports.projectOpened=projects[projectIndex];
      await addUSListToHtml(dom.window.document);
      await addButtonCreate(dom.window.document);
      await res.write(dom.serialize());
    }
  });
}
async function addUSListToHtml(document) {
  const listUS = await (new USDAO(Home.connectionDB)).getAllUSByProject(module.exports.projectOpened);
  const listeHTML = document.getElementById('IssueList');
  const utilsForm = new UtilsForm();
  const list = await document.createElement('p');
  for (let i = 0; i < listUS.length; i++) {
    const form = await utilsForm.getForm(document, 'form'+listUS[i].id, '/backlog', 'post');
    await form.appendChild(await utilsForm.getTexte(document, listUS[i].toString()));
    const button = await utilsForm.getInput(document, 'delete', 'submit');
    button.value='Supprimer';
    button.id='delete'+listUS[i].id;
    const hiddenData = await utilsForm.getInput(document, 'data', 'hidden');
    hiddenData.value=listUS[i].id;
    await form.appendChild(button);
    await form.appendChild(hiddenData);
    await list.appendChild(form);
  }
  await listeHTML.appendChild(list);
}
function addButtonCreate(document) {
  const button = document.getElementById('AddUs');
  button.value = valueButtonCreateUS;
}
module.exports = router;
