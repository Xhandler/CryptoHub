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
    login: () => {
      console.log('hi');
    }
  };
  ws.onmessage = function(e) {
    const data = JSON.parse(e.data);
    if (data.event === 'login') {
      api.login();
    }
  };
  ws.on('close', () => {
    console.log('stopping client interval');
  });
});
server.on('request', app);
server.listen(8001, () => {
  console.log('Listening on http://localhost:8001');
});
