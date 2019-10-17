const { resolve } = require('path');
const { createSession, getSession, endSession } = require('./controller');
const { environment } = require('./config').server;

module.exports = (app) => {
  app.get('/', (_, res) => res.send('NachoNight Peer2Peer Coordinator'));
  app.post('/session/create', (req, res) => createSession(req, res));
  app.get('/session/get/:id', (req, res) => getSession(req, res));
  app.delete('/session/end/:id', (req, res) => endSession(req, res));
  // Testing client should be available while in development mode only.
  if (environment === 'development')
    app.get('/test', (_, res) =>
      res.sendFile(resolve(__dirname, './test-client/index.html')),
    );
};
