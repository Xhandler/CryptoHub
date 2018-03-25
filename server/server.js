const WebSocketServer = require('uws').Server;
const express = require('express');
const uWsApi = require('./uWsApi');
const path = require('path');
const app = express();
const server = require('http').createServer();
const cors = require("cors");
const r = require('rethinkdb');
r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
});
let connections = new Set();

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
    console.log(data.username);
    r.table('Author').insert([
    {
      username: data.username, password: data.password
    }
  ])
    case 'logIn':
    // check if authentication clears
    // change state to render component which pulls the cleared data into a div and says welcome 'user'
    case 'logOut':
    //flip state authentication to remove component by not triggering if conditional
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
