const WebSocketServer = require('uws').Server;
const server = require('http').createServer();
const uWsApi = require('./uWsApi.js');
const r = require('rethinkdb');
r.connect( {host: 'localhost', port: 28015}, function(err, conn) {
    if (err) throw err;
    connection = conn;
});

const init = (server) => {
  const wss = new WebSocketServer({
    server: server,
  });
  wss.on('connection', (ws) => {
    ws.onmessage = async function(e) {
     const data = JSON.parse(e.data);
     switch(data.event) {
      case 'scrape':
        const scrapeData = await uWsApi.scrape();
        ws.send(JSON.stringify(scrapeData));
      case 'signUp':
      if(data.username && data.password) {
        let username = data.username;
        let password = data.password;
        console.log(`${username} ${password}`);
        r.table('Author').insert([
        {
          username: username, password: password
        }
      ]).run(connection, function(err, result) {
        if (err) throw err;
        console.log(JSON.stringify(result, null, 2));
      });
      }

      case 'logIn':

      case 'logOut':
      }
    };
    ws.on('close', function() {
      console.log('stopping client interval');
    });
  });
  return wss;
};

module.exports = init;
