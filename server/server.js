const WebSocketServer = require('uws').Server;
const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer();
app.use(express.static(path.join(__dirname, '/build')));
const wss = new WebSocketServer({
  server
});
wss.on('connection', (ws) => {
  console.log('started client interval');
  const api = {
    login: (data) => {
      console.log(data.event);
    }
  };
  ws.onmessage = function(e) {
    if(e.data) {
     const data = JSON.parse(e.data);
     if (data.event === 'login') {
       api.login(data);
     }
     if (data.event) {
       console.log(data.event)
     }
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
