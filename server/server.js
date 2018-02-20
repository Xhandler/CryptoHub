const WebSocketServer = require('uws').Server;
const express = require('express');
const uWsApi = require('./uWsApi');
const path = require('path');
const app = express();
const server = require('http').createServer();
const cors = require("cors");

app.use(express.static(path.join(__dirname, '/build')));

const wss = new WebSocketServer({
  server
});
wss.on('connection', (ws) => {
  console.log('started client interval');
  ws.onmessage = async function(e) {
   const data = JSON.parse(e.data);
   switch(data.event) {
    case 'scrape':
      const coindeskData = await uWsApi.scrape();
      ws.send(JSON.stringify(coindeskData));
    case 'text':
      console.log(data.test);
  }
};
  ws.on('close', function() {
    console.log('stopping client interval');
  });
});

server.on('request', app);
server.listen(8001, function() {
  console.log('Starting up server on http://localhost:8001');
});
