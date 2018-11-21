const express = require('express');
const router = express.Router();
const pathNameFiles = '/../html/Backlog';

router.get('/', function(req, res) {
  sendPage(res);
  res.end();
});
router.post('/', function(req, res) {
  sendPage(res);
  res.end();
});
function sendPage(res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Backlog: "+ res.body.open);
  res.end();
}
module.exports = router;
