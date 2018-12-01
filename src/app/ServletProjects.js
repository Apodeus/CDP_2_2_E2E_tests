const express = require('express');
const path = require('path');
const jsdom = require('jsdom').JSDOM;
const router = express.Router();
const ProjectDAO = require('./ProjectDAO');
const Home = require('./ServletConnectedHome');
const UtilsForm = require('./UtilsForm');


const pathNameFiles = '/../html/Projects';
const valueButtonCreateProject = 'Créer un nouveau Projet';

router.get('/', async function(req, res) {
  await jsdom.fromFile(path.resolve(__dirname+pathNameFiles+'.html'), '').then(async (dom) => {
    await addButtonCreate(dom.window.document);
    await listProjects(dom.window.document, Home.connectedUser);
    await res.writeHead(200, {'Content-Type': 'text/html'});
    await res.write(await dom.serialize());
    await res.end();
  });
});
router.post('/', function(req, res) {
  if (req.body.createproject === valueButtonCreateProject) {
    res.redirect('/createproject');
  }
});
function addButtonCreate(document) {
  const button = document.getElementById('CreateProject');
  button.value = valueButtonCreateProject;
}
/**
 * Add to parent a new html object for project (project name, buttons delete, open ...)
 */
async function addHtmlObjectForProject(document, project, parent) {
  const utilsForm = new UtilsForm();
  const listLi= await document.createElement('li');
  const form = await utilsForm.getForm(document, 'form'+project.id, '/backlog', 'post');
  const text= await utilsForm.getTexte(document, project.toString());
  await form.appendChild(text);
  const hiddenData = await utilsForm.getInput(document, 'data', 'hidden');
  hiddenData.value=project.id;
  const buttonOpen = await utilsForm.getInput(document, 'open', 'submit');
  buttonOpen.value = 'Ouvrir';
  buttonOpen.id = project.id;
  await form.appendChild(hiddenData);
  await form.appendChild(buttonOpen);
  await listLi.appendChild(form);
  await parent.appendChild(listLi);
}

async function listProjects(document, userArg) {
  const doc= await document.getElementById('ProjectsList');
  const title= await document.createElement('h2');
  title.innerHTML='Liste des projets de '+userArg.pseudo+' : ';
  await doc.appendChild(title);
  const list = await document.createElement('ul');
  await doc.appendChild(list);
  await (async () => {
    const projects = await ((new ProjectDAO(Home.connectionDB)).getAllByUser(userArg));
    for (let p = 0; p < projects.length; p++) {
      if (projects[p].owner.id===userArg.id) {
        await addHtmlObjectForProject(document, projects[p], list);
      }
    };
    const title2= await document.createElement('h2');
    title2.innerHTML='Liste des projets auquels '+userArg.pseudo+' participe : ';
    await doc.appendChild(title2);
    const list2 = await document.createElement('ul');
    await doc.appendChild(list2);
    for (let p = 0; p < projects.length; p++) {
      for (let i=0; i<projects[p].participants.length; i++) {
        if (projects[p].participants[i].id===userArg.id) {
          await addHtmlObjectForProject(document, projects[p], list2);
        }
      }
    }
  })();
}
module.exports = router;
