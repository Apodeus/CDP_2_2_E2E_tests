const express = require('express');
const path = require('path');
const jsdom = require('jsdom').JSDOM;
const router = express.Router();
const ProjectDAO = require('./ProjectDAO');
const Home = require('./ServletConnectedHome');

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

async function getProjects(user) {
  const teamMate= Home.connectedUser;
  let projects=[];
  const dao = new ProjectDAO(Home.connectionDB);
  try {
    await dao.getAllByUser(teamMate, function(x) {
      projects = x;
    });
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
  doc.appendChild(list);
  await (async () => {
    const projects = await getProjects(userArg);
    projects.forEach((project)=>{
      if (project.owner.id===userArg.id) {
        const l=document.createElement('li');
        const text=document.createTextNode(project.name+' '+project.description);
        l.appendChild(text);
        list.appendChild(l);
      }
    });


    const title2=document.createElement('h2');
    title2.innerHTML='Liste des projets auquels '+userArg.pseudo+' participe : ';
    doc.appendChild(title2);
    const list2 = document.createElement('ul');
    doc.appendChild(list2);
    projects.forEach((project)=>{
      for (let i=0; i<project.participants.length; i++) {
        if (project.participants[i].id===userArg.id) {
          const l=document.createElement('li');
          const text=document.createTextNode(project.name+' '+project.description);
          l.appendChild(text);
          list2.appendChild(l);
        }
      }
    });
  })();
}
module.exports = router;
