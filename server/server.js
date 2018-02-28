const WebSocketServer = require('uws').Server;
const express = require('express');
const uWsApi = require('./uWsApi');
const path = require('path');
const app = express();
const server = require('http').createServer();
const cors = require("cors");
const thinky = require('thinky')();
const type = thinky.type;

// Create a model - the table is automatically created
let Post = thinky.createModel("Post", {
  id: String,
  title: String,
  content: String,
  idAuthor: String
});

// You can also add constraints on the schema
let Author = thinky.createModel("Author", {
  id: type.string(),      // a normal string
  name: type.string().min(2),  // a string of at least two characters
  email: type.string().email()  // a string that is a valid email
});

// Join the models
Post.belongsTo(Author, "author", "idAuthor", "id");

app.use(express.static(path.join(__dirname, '/build')));

const wss = new WebSocketServer({
  server
});
wss.on('connection', (ws) => {
  ws.onmessage = async function(e) {
   const data = JSON.parse(e.data);
   switch(data.event) {
    case 'scrape':
      const coindeskData = await uWsApi.scrape();
      ws.send(JSON.stringify(coindeskData));
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
