const express = require('express');
const path = require('path');
const jsdom = require('jsdom');
const router = express.Router();
const ProjectDAO = require('./ProjectDAO');
const Project = require('./Project');
const Home = require('./ServletConnectedHome');
const UtilsForm = require('./UtilsForm');
const pathNameFiles = '/../html/AddProject';

router.get('/', function(req, res) {
  sendPage(res);
});
router.post('/', function(req, res) {
  if (!checkValidityAnswerForm(req.body)) {
    sendPage(res);
  } else {
    const project = new Project(req.body.name, req.body.description,
        req.body.start, parseInt(req.body.sprint), Home.connectedUser);
    (new ProjectDAO(Home.connectionDB)).save(project);
    res.redirect('/projects');
  }
});
function sendPage(res) {
  jsdom.JSDOM.fromFile(path.resolve(__dirname+pathNameFiles+'.html'), '').then(async (dom) => {
    await (new UtilsForm()).addFormCreateProjectToDocument(dom.window.document);
    await res.writeHead(200, {'Content-Type': 'text/html'});
    await res.write(dom.serialize());
    res.end();
  });
}

function checkValidityAnswerForm(body) {
  return (body.name !== undefined && body.name !== '') && (body.start !== undefined && body.start !== ''
  && body.start !== 'Thu Nov 30 1899 00:00:00 GMT+0000') &&
  (body.sprint !== undefined && body.sprint !== '' && parseInt(body.sprint) > 0);
}
module.exports = router;
