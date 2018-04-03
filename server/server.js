const express = require('express');
const path = require('path');
const app = express();
const server = require('http').createServer();
const cors = require("cors");

server.on('request', app);
server.listen(8001, function() {
  console.log('Starting up server on http://localhost:8001');
});
const socket = require('./socket')(server);
const routes = require('./routes')(socket);

app.use('/', routes);
app.use(express.static(path.join(__dirname, '/build')));
