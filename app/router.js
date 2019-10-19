const { resolve } = require('path');
const { environment } = require('./config').server;

module.exports = (app) => {
  app.get('/', (_, res) => res.send('NachoNight Peer2Peer Coordinator'));
  // Testing client should be available while in development mode only.
  if (environment === 'development')
    app.get('/test', (_, res) =>
      res.sendFile(resolve(__dirname, './test-client/index.html')),
    );
  app.get('/session/ignacius', (req, res) =>
    res.sendFile(resolve(__dirname, './test-client/test.html')),
  );
};
