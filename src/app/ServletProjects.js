const mysql = require('mysql2');
const express = require('express');
const path = require("path");
const jsdom = require("jsdom").JSDOM;
const fs = require('fs');
let router = express.Router();
let User = require('./User');
let Project = require('./Project');
let ProjectDAO = require("./ProjectDAO");
let Home = require("./ServletConnectedHome");


let app = express();
const pathNameFiles = "/../html/Projects";

router.get('/', function(req, res, next) {
  jsdom.fromFile(path.resolve(__dirname+pathNameFiles+".html"), "").then(dom => {
      listProjects(dom.window.document, Home.connectedUser);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(dom.serialize());
      res.end();
    });

});

function getProjects(user){
  let teamMate= Home.connectedUser;
  let projects=[];
  new ProjectDAO(Home.connectionDB).getAllByUser(teamMate, function(x){
    projects = x;
  });
  return projects;
}

function listProjects(document, userArg){
    let doc=document.getElementById("ProjectsList");
    let title=document.createElement("h2");
    title.innerHTML="Liste des projets de "+userArg.pseudo+" : ";
    doc.appendChild(title);
    let list = document.createElement("ul");
    doc.appendChild(list);
    getProjects(userArg).forEach((project)=>{
      if(project.owner.id===userArg.id){
        let l=document.createElement("li");
        let text=document.createTextNode(project.name+" "+project.description);
        l.appendChild(text);
        list.appendChild(l);
      }
    });

    let title2=document.createElement("h2");
    title2.innerHTML="Liste des projets auquels "+userArg.pseudo+" participe : ";
    doc.appendChild(title2);
    let list2 = document.createElement("ul");
    doc.appendChild(list2);
    getProjects(userArg).forEach((project)=>{
      for(var i=0; i<project.participants.length; i++){
        if(project.participants[i].id===userArg.id){
          let l=document.createElement("li");
          let text=document.createTextNode(project.name+" "+project.description);
          l.appendChild(text);
          list2.appendChild(l);
        }
      }
    });

}
module.exports = router;
