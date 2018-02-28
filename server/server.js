const WebSocketServer = require('uws').Server;
const express = require('express');
const Clients = require('./client.js');
const uWsApi = require('./uWsApi');
const path = require('path');
const app = express();
const server = require('http').createServer();
const cors = require("cors");
const thinky = require('thinky')({
  host: 'localhost',
  port: 28015,
  db: 'Users'
});
const r = thinky.r;
let connections = new Set();

let Users = thinky.createModel("Users", {
  id: String,
  title: String,
  content: String,
  idAuthor: String
});

app.use(express.static(path.join(__dirname, '/build')));

const wss = new WebSocketServer({
  server
});
wss.on('connection', (ws) => {
  connections.add(ws);

  ws.onmessage = async function(e) {
   const data = JSON.parse(e.data);
   switch(data.event) {
    case 'scrape':
      const coindeskData = await uWsApi.scrape();
      ws.send(JSON.stringify(coindeskData));
    case 'signUp':
    console.log(data.test);
  }
};
  ws.on('close', function() {
    console.log('stopping client interval');
    connections.delete(ws);
  });
});

server.on('request', app);
server.listen(8001, function() {
  console.log('Starting up server on http://localhost:8001');
});
