const express = require('express');
const router = express.Router();
const pathNameFiles = '/../html/Backlog';

router.get('/', function(req, res) {
  sendPage(res, res);
  res.end();
});
router.post('/', function(req, res) {
  sendPage(res, req);
  res.end();
});
function sendPage(res, req) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  if (req.body.open !== undefined) {
    res.write('Backlog du projet : '+ req.body.data);
  }
  res.end();
}
module.exports = router;
