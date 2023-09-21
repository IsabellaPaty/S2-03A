var http = require('http');
var dt = require('./login.js');
var dt1 = require('./cadastro.js');
var dt3 = require('./pagina_inicial.js');
var dt2 = require('./agendamento.js');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Login legal: " + dt.myDateTime() + "<br>");
  res.write("Cadastro maneiro:" + dt1.myDateTime() + "<br>");
  res.write("Agendamentos bacana:" + dt2.myDateTime() + "<br>");
  res.write("Home:" + dt3.myDateTime() + "<br>");
  res.end();
}).listen(5010);
