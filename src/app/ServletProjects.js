const express = require('express');
const path = require('path');
const jsdom = require('jsdom').JSDOM;
const router = express.Router();
const ProjectDAO = require('./ProjectDAO');
const Home = require('./ServletConnectedHome');
const UtilsForm = require('./UtilsForm');


const pathNameFiles = '/../html/Projects';
const valueButtonCreateProject = 'Créer un nouveau Projet';

router.get('/', function(req, res) {
  jsdom.fromFile(path.resolve(__dirname+pathNameFiles+'.html'), '').then(async (dom) => {
    addButtonCreate(dom.window.document);
    await listProjects(dom.window.document, Home.connectedUser);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(dom.serialize());
    res.end();
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
  const listLi=document.createElement('li');
  const form = utilsForm.getForm(document, 'form'+project.id, '/backlog', 'post');
  const text=utilsForm.getTexte(document, project.toString());
  form.appendChild(text);
  const hiddenData = utilsForm.getInput(document, 'data', 'hidden');
  hiddenData.value=project.id;
  const buttonOpen = utilsForm.getInput(document, 'open', 'submit');
  buttonOpen.value = 'Ouvrir';
  buttonOpen.id = project.id;
  form.appendChild(hiddenData);
  form.appendChild(buttonOpen);
  listLi.appendChild(form);
  parent.appendChild(listLi);
}

async function getProjects(user) {
  const teamMate= Home.connectedUser;
  let projects=[];
  const dao = new ProjectDAO(Home.connectionDB);
  try {
    projects = await dao.getAllByUser(teamMate);
  } catch (e) {
    console.log(e);
  }
  return projects;
}

async function listProjects(document, userArg) {
  const doc=document.getElementById('ProjectsList');
  const title=document.createElement('h2');
  title.innerHTML='Liste des projets de '+userArg.pseudo+' : ';
  doc.appendChild(title);
  const list = document.createElement('ul');
  await doc.appendChild(list);
  await (async () => {
    const projects = await getProjects(userArg);
    for (let p = 0; p < projects.length; p++) {
      if (projects[p].owner.id===userArg.id) {
        await addHtmlObjectForProject(document, projects[p], list);
      }
    };

    const title2=document.createElement('h2');
    title2.innerHTML='Liste des projets auquels '+userArg.pseudo+' participe : ';
    doc.appendChild(title2);
    const list2 = document.createElement('ul');
    doc.appendChild(list2);
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
