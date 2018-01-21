const WebSocketServer = require('uws').Server;
const express = require('express');
const uWsApi = require('./uWsApi');
const path = require('path');
const app = express();
const server = require('http').createServer();
const r = require('rethinkdbdash')({
	port: 8001,
	host: 'localhost'
});
r.dbCreate('SitePoint')
.run()
.then(function(response){
	console.log(response);
})
.error(function(err){
	console.log('error occured ', err);
});
app.use(express.static(path.join(__dirname, '/build')));

const wss = new WebSocketServer({
  server
});
wss.on('connection', (ws) => {
  console.log('started client interval');
  ws.onmessage = function(e) {
   const data = JSON.parse(e.data);
   switch(data.event) {
    case 'login':
      uWsApi.login(data.event);
  }
};
  ws.on('close', function() {
    console.log('stopping client interval');
  });
});

server.on('request', app);
server.listen(8001, function() {
  console.log('Listening on http://localhost:8001');
});
