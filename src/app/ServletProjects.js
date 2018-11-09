const mysql = require('mysql2');
const express = require('express');
const path = require("path");
const jsdom = require("jsdom").JSDOM;
const fs = require('fs');
let router = express.Router();
//let UserDAO = require("./UserDAO");
let User = require('./User');
let Project = require('./Project');

let connectionDB = mysql.createConnection({
  host: "database",
  port:3306,
  database: "cdp",
  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000
 },
  user: "user",
  password: "root"
});


/*Temporaire: pour montrer que l'on a bien un début de gestion d'utilisateur*/
//let userDAO = new UserDAO(connectionDB);
let user=new User("user", "user@gmail.com", "user");
user.id=0;

let app = express();
const pathNameFiles = "/../html/Projects";

/*router.get("/", function(req,res, next){
    res.write("mes projets:");
    res.end();
});*/

router.get('/', function(req, res, next) {
  jsdom.fromFile(path.resolve(__dirname+pathNameFiles+".html"), "").then(dom => {
      listProjects(dom.window.document, user);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(dom.serialize());
      //addScriptToHTML(res);
      res.end();
    });

    /*if (req.query.MesProjets!= undefined){
        res.write("/projects");
        res.end();
    }
    else{

    }*/

});

function getProjects(){
  let teamMate=new User("user2", "user2@gmail.com", "user2");
  teamMate.id=1;
  let projects=[];
  //Temporaire : on est senser recuprerer depuis la BDD
  for(var i=0; i<5; i++){
    let p;
    if(i%2==0){
      p=new Project("Projet "+i, "description du projet "+i, "2018-11-9", 2, user);
      p.addParticipant(teamMate);
    }else{
      p=new Project("Projet "+i, "description du projet "+i, "2018-11-9", 2, teamMate);
      p.addParticipant(user);
    }
    p.id=i;
    projects.push(p);
  }
  return projects;
}

function listProjects(document, userArg){
    let doc=document.getElementById("ProjectsList");
    let title=document.createElement("h2");
    title.innerHTML="Liste des projets de "+user.pseudo+" : ";
    doc.appendChild(title);
    let list = document.createElement("ul");
    doc.appendChild(list);
    getProjects().forEach((project)=>{
      if(project.owner.id===userArg.id){
        let l=document.createElement("li");
        let text=document.createTextNode(project.name+" "+project.description);
        l.appendChild(text);
        list.appendChild(l);
      }
    });

    let title2=document.createElement("h2");
    title2.innerHTML="Liste des projets auquels "+user.pseudo+" participe : ";
    doc.appendChild(title2);
    let list2 = document.createElement("ul");
    doc.appendChild(list2);
    getProjects().forEach((project)=>{
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
function addScriptToHTML(res){
    let script = fs.readFileSync(__dirname+pathNameFiles+".js", "utf8");
    res.write("<script>"+script+"</script>");
}
module.exports = router;
