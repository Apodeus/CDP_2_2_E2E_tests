const mysql = require('mysql2');

let con = mysql.createConnection({
  host: "database",
  port:3306,
  database: "cdp",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
 },
  user: "user",
  password: "root"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected to the database!");
});

const http = require('http');

var server = http.createServer();

server.on('request', function(req, res) {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Salut tout le monde !');
});

server.on('listen', function() {
  console.log('Server started!');
})

server.listen(3000);