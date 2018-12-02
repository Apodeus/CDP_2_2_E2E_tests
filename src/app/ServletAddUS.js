const express = require('express');
const path = require('path');
const jsdom = require('jsdom');
const router = express.Router();
const USDAO = require('./USDAO');
const US = require('./US');
const Home = require('./ServletConnectedHome');
const UtilsForm = require('./UtilsForm');
const Backlog = require('./ServletBacklog');
const pathNameFiles = '/../html/AddUS';

router.get('/', function(req, res) {
  sendPage(res);
});
router.post('/', async function(req, res) {
  if (!checkValidityAnswerForm(req.body)) {
    sendPage(res);
  } else {
    let sprint=undefined;
    if(req.body.sprint!=="NOT DEFINED"){
      // quand on aura les sprints il faudra rajouter la recherche du nom du sprint
      // dans la liste des sprints du projet
      sprint=req.body.sprint;
    }
    const us =new US(req.body.title, req.body.description,
        parseInt(req.body.difficulty), req.body.priority, Backlog.projectOpened, sprint);
    await (new USDAO(Home.connectionDB)).save(us);
    res.redirect('/backlog');
  }
});
function sendPage(res) {
  jsdom.JSDOM.fromFile(path.resolve(__dirname+pathNameFiles+'.html'), '').then(async (dom) => {
    // pour l'instant on passe [] mais quand on aura les sprints on utilisera getAllSprintsByProject
    // et on envera seulement la liste des noms
    await (new UtilsForm()).addFormCreateUSToDocument(dom.window.document, [] );
    await res.writeHead(200, {'Content-Type': 'text/html'});
    await res.write(dom.serialize());
    res.end();
  });
}

function checkValidityAnswerForm(body) {
  console.log(body.title+" "+body.description+" "+body.difficulty+" "+body.priority+" "+body.sprint);
  return (body.title !== undefined && body.title !== '') && (body.description !== undefined && body.description !== '') &&
  (body.difficulty !== undefined && body.difficulty !== '' && parseInt(body.difficulty) > 0);
}
module.exports = router;
