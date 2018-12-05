const mysql = require('mysql2');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jsdom = require('jsdom').JSDOM;
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

const userDAO = new UserDAO(connectionDB);
const pathNameFiles = '/../html/ConnectedHome';
const app = express();
app.listen(3000);
app.use(bodyParser.urlencoded({extended: false}));
app.use('/projects', require('./ServletProjects'));
app.use('/createproject', require('./ServletAddProject'));
app.use('/addus', require('./ServletAddUS'));
app.use('/backlog', require('./ServletBacklog'));


app.get('/', async function(req, res) {
/* Temporaire: pour montrer que l'on a bien un début de gestion d'utilisateur*/
  module.exports.connectedUser = await userDAO.save(new User('user', 'user@gmail.com', 'user'));
  jsdom.fromFile(path.resolve(__dirname+pathNameFiles+'.html'), '').then((dom) => {
    configureButton(dom.window.document);
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(dom.serialize());
    res.end();
  });
});
app.get('/TabsBar.css', function(req, res) {
  res.sendFile(path.resolve(__dirname+'/../html/TabsBar.css'));
});

function configureButton(document) {
  const form = document.getElementById('form');
  form.action='/projects';
  form.method='post';
  const button = document.getElementById('MesProjets');
  button.value = 'Mes Projets';
}
module.exports.connectionDB = connectionDB;
