const express = require('express');
const path = require('path');
const jsdom = require('jsdom').JSDOM;
const router = express.Router();
const ProjectDAO = require('./ProjectDAO');
const Home = require('./ServletConnectedHome');

const pathNameFiles = '/../html/Projects';

router.get('/', function(req, res, next) {
  jsdom.fromFile(path.resolve(__dirname+pathNameFiles+'.html'), '').then((dom) => {
    listProjects(dom.window.document, Home.connectedUser);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(dom.serialize());
    res.end();
  });
});

async function getProjects(user) {
  const teamMate= Home.connectedUser;
  const dao = (new ProjectDAO(Home.connectionDB));
  await dao.getAllByUser(teamMate, function(x) {
    console.log("fonction");
    return x;
  });
  console.log("return");
}

async function listProjects(document, userArg) {
  const doc=document.getElementById('ProjectsList');
  const title=document.createElement('h2');
  title.innerHTML='Liste des projets de '+userArg.pseudo+' : ';
  doc.appendChild(title);
  const list = document.createElement('ul');
  doc.appendChild(list);
  console.log("nasituenatuie");
  const projects = await getProjects(userArg);
  /*
  projects.forEach((project)=>{
    console.log("projet: "+project);
    if (project.owner.id===userArg.id) {
      console.log("test nrauiteatunie");
      const l=document.createElement('li');
      const text=document.createTextNode(project.name+' '+project.description);
      l.appendChild(text);
      list.appendChild(l);
    }
  });
  doc.appendChild(list);

  const title2=document.createElement('h2');
  title2.innerHTML='Liste des projets auquels '+userArg.pseudo+' participe : ';
  doc.appendChild(title2);
  const list2 = document.createElement('ul');
  doc.appendChild(list2);
  getProjects(userArg).forEach((project)=>{
    for (let i=0; i<project.participants.length; i++) {
      if (project.participants[i].id===userArg.id) {
        const l=document.createElement('li');
        const text=document.createTextNode(project.name+' '+project.description);
        l.appendChild(text);
        list2.appendChild(l);
      }
    }
  });
  */
}
module.exports = router;
