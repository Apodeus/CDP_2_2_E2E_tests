const mysql = require('mysql2');
const express = require('express');
const path = require("path");
const jsdom = require("jsdom").JSDOM;
const fs = require('fs');
let UserDAO = require("./UserDAO");
let User = require('./User');

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
let userDAO = new UserDAO(connectionDB);
userDAO.save(new User("user", "user@gmail.com", "user"), (x) => console.log(x));

let app = express();
const pathNameFiles = "/../html/ConnectedHome";
app.listen(3000);

app.use("/projects", require("./ServletProjects"));
app.get('/', function(req, res) {
    if (req.query.MesProjets!= undefined){
        res.write("/projects");
        res.end();
    }
    else{
        jsdom.fromFile(path.resolve(__dirname+pathNameFiles+".html"), "").then(dom => {
            configureButton(dom.window.document); 
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(dom.serialize());
            addScriptToHTML(res);
            res.end();
          });
    }
  
});

function configureButton(document){
    let button = document.getElementById("MesProjets");
    button.innerHTML = "Mes Projets";
    
}
function addScriptToHTML(res){
    let script = fs.readFileSync(__dirname+pathNameFiles+".js", "utf8");
    res.write("<script>"+script+"</script>");
}
