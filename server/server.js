const WebSocketServer = require('ws').Server;
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
  ws.on('close', () => {
    console.log('stopping client interval');
  });
});
wss.on('message', (message) => {
  console.log('Server received message: %s', message);
  // Send back the message that we receive from the browser
  wss.send(message);
});
server.on('request', app);
server.listen(8001, () => {
  console.log('Listening on http://localhost:8001');
});
// Define websocket events here
