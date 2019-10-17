const express = require('express');
const { ExpressPeerServer } = require('peer');
const { port, environment } = require('./config').server;
const applyMiddleware = require('./middleware');
const initRouter = require('./router');

class Server {
  constructor() {
    this.app = express();
    this.server = this.app.listen(port, (err) => {
      if (err) {
        this.stop(err);
      }
      console.log(
        `Server is running.\nhttp://localhost:${port}/\nEnvironment: ${environment}`,
      );
    });
    this.peerServer = ExpressPeerServer(this.server, { debug: true });
    this.init();
  }

  init() {
    console.log('Initializing server...');
    applyMiddleware(this.app);
    initRouter(this.app);
  }

  start() {
    this.app.use('/', this.peerServer);
    this.peerServer.on('connection', (id) => console.log(`Connected: ${id}`));
  }

  stop(err = false) {
    let exitCode = 0;
    if (err) {
      console.error(err);
      exitCode = 1;
    }
    console.log('Server stopped.');
    process.exit(exitCode);
  }
}

module.exports = new Server();
