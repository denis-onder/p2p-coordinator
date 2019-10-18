# NachoNight Peer2Peer Coordinator

Be aware that, since Peer requires to be ran on top of a HTTPS server, a `generateSSL` script has been provided.
It is located in the `scripts` folder. This should be ran before attempting to start the Node server.

### Scripts:

- `npm start` - Runs the Node server.

- `npm run dev` - Runs the Node server using Nodemon.

### Testing the P2P connection

While the `NODE_ENV` is set to `development`, two testing endpoints will be exposed by the API.

The `/test` will load the page where you can start a screen-sharing stream. Once you've started a stream,
you can go ahead and go to the `/session/ignacius` endpoint, where you will be able to see the stream as a new peer.
