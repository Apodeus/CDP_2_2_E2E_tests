const mysql = require('mysql2');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jsdom = require('jsdom').JSDOM;
const fs = require('fs');
const UserDAO = require('./UserDAO');
const User = require('./User');
const connectionDB = mysql.createConnection({
  host: 'database',
  port: 3306,
  database: 'cdp',
  pool: {
    max: 50,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  user: 'user',
  password: 'root',
});
/* Temporaire: pour montrer que l'on a bien un début de gestion d'utilisateur*/
const userDAO = new UserDAO(connectionDB);
let connectedUser;
userDAO.save(new User('user', 'user@gmail.com', 'user'), function(x) {
  connectedUser = x;
  //tempo
  connectedUser._id = 107;
  module.exports.connectedUser = connectedUser;
});
const pathNameFiles = '/../html/ConnectedHome';
const app = express();
app.listen(3000);
app.use(bodyParser.urlencoded({extended: false}));
app.use('/projects', require('./ServletProjects'));
app.use('/createproject', require('./ServletCreateProject'));
app.get('/', function(req, res) {
  if (req.query.MesProjets!== undefined) {
    res.write('/projects');
    res.end();
  } else {
    jsdom.fromFile(path.resolve(__dirname+pathNameFiles+'.html'), '').then((dom) => {
      configureButton(dom.window.document);
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(dom.serialize());
      addScriptToHTML(res);
      res.end();
    });
  }
});

function configureButton(document) {
  const button = document.getElementById('MesProjets');
  button.innerHTML = 'Mes Projets';
}
function addScriptToHTML(res) {
  const script = fs.readFileSync(__dirname+pathNameFiles+'.js', 'utf8');
  res.write('<script>'+script+'</script>');
}
module.exports.connectionDB = connectionDB;
