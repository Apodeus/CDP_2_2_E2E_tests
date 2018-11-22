const express = require('express');
const router = express.Router();
const path = require('path');
const jsdom = require('jsdom');
const pathNameFiles = '/../html/Backlog';
const TabBuilder = require('./TabBuilder');

router.get('/', function(req, res) {
  sendPage(res, res);
  res.end();
});
router.post('/', function(req, res) {
  sendPage(res, req);
  res.end();
});
async function sendPage(res, req) {
  await jsdom.JSDOM.fromFile(path.resolve(__dirname+pathNameFiles+'.html'), '').then(async (dom) => {
    await (new TabBuilder()).build(dom.window.document);
    res.writeHead(200, {'Content-Type': 'text/html'});
    if (req.body.open !== undefined) {
      res.write('Backlog du projet : '+ req.body.data);
      res.write(dom.serialize());
    }
  });
}
module.exports = router;
