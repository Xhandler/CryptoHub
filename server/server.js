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
    case 'login':
      uWsApi.login(data.event);
    case 'scrape':
      const coindeskData = await uWsApi.scrape();
      console.log(`Sucessfully scraped coindesk`);
      console.log(coindeskData);
      ws.send(JSON.stringify(coindeskData));
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
