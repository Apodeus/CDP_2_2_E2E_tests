const express = require('express');
const path = require('path');
const jsdom = require('jsdom');
const router = express.Router();
const ProjectDAO = require('./ProjectDAO');
const Project = require('./Project');
const Home = require('./ServletConnectedHome');
const pathNameFiles = '/../html/CreateProject';

router.get('/', function(req, res) {
  sendPage(res);
});
router.post('/', function(req, res) {
  if (!checkValidityAnswerForm(req.body)) {
    sendPage(res);
  } else {
    const project = new Project(req.body.name, req.body.description,
        req.body.debut, req.body.sprint, Home.connectedUser);
    (new ProjectDAO(Home.connectionDB)).save(project, (p)=>{
      res.redirect('/projects');
    });
  }
});
function sendPage(res) {
  jsdom.JSDOM.fromFile(path.resolve(__dirname+pathNameFiles+'.html'), '').then((dom) => {
    createForm(dom.window.document);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(dom.serialize());
    res.end();
  });
}
function createForm(document) {
  const form = document.getElementById('formulaire');
  form.action='/createproject';
  const divButton = document.getElementById('button');
  const button = document.getElementById('validate');
  button.innerHTML = 'Créer un projet';
  const add = function(node) {
    form.insertBefore(node, divButton);
  };
  add(getTexte(document, 'Nom*: '));
  add(getInput(document, 'name', 'text'));
  add(getTexte(document, 'Description: '));
  add(getInput(document, 'description', 'text'));
  add(getTexte(document, 'Date de début*: '));
  add(getInput(document, 'debut', 'date'));
  add(getTexte(document, 'Durée des sprints*: '));
  add(getInput(document, 'sprint', 'number'));
}
function getInput(document, id, type) {
  const input = document.createElement('input');
  input.type = type;
  input.name = id;
  return input;
}
function getTexte(document, texte) {
  const res = document.createElement('p');
  res.innerHTML = texte;
  return res;
}
function checkValidityAnswerForm(body) {
  return body.name !== undefined && body.debut !== undefined && body.sprint !== undefined;
}
module.exports = router;
