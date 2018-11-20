const express = require('express');
const path = require('path');
const fs = require('fs');
const jsdom = require('jsdom').JSDOM;
const router = express.Router();
const ProjectDAO = require('./ProjectDAO');
const Home = require('./ServletConnectedHome');

const pathNameFiles = '/../html/Projects';

router.get('/', function(req, res, next) {
    if(req.query.CreateProject !== undefined){
        console.log("Redirection to home");
        res.redirect('http://localhost:3000/');
        res.end();
    } else {
        jsdom.fromFile(path.resolve(__dirname + pathNameFiles + '.html'), '').then((dom) => {
            addButtonCreate(dom.window.document);
            listProjects(dom.window.document, Home.connectedUser);
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(dom.serialize());
            addScriptToHTML(res);
            res.end();
        });
    }
});

function getProjects(user) {
    const teamMate= Home.connectedUser;
    let projects=[];
    new ProjectDAO(Home.connectionDB).getAllByUser(teamMate, function(x) {
        projects = x;
    });
    return projects;
}

function addButtonCreate(document){
    const button = document.getElementById('CreateProject');
    button.innerHTML = 'Créer un nouveau Projet';
}

function addScriptToHTML(res) {
    const script = fs.readFileSync(__dirname + pathNameFiles + '.js', 'utf8');
    res.write('<script>' + script + '</script>');
}

function listProjects(document, userArg) {
    const doc=document.getElementById('ProjectsList');
    const title=document.createElement('h2');
    title.innerHTML = 'Liste des projets de ' + userArg.pseudo + ' : ';
    doc.appendChild(title);
    const list = document.createElement('ul');
    doc.appendChild(list);
    getProjects(userArg).forEach((project) => {
        if (project.owner.id === userArg.id) {
            const l = document.createElement('li');
            const text = document.createTextNode(project.name + ' ' + project.description);
            l.appendChild(text);
            list.appendChild(l);
        }
    });

    const title2 = document.createElement('h2');
    title2.innerHTML = 'Liste des projets auquels ' + userArg.pseudo + ' participe : ';
    doc.appendChild(title2);
    const list2 = document.createElement('ul');
    doc.appendChild(list2);
    getProjects(userArg).forEach((project) => {
        for (let i = 0; i < project.participants.length; i++) {
            if (project.participants[i].id === userArg.id) {
                const l = document.createElement('li');
                const text = document.createTextNode(project.name + ' ' + project.description);
                l.appendChild(text);
                list2.appendChild(l);
            }
        }
    });
}
module.exports = router;
