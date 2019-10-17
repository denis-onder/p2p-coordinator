/**
 * This file will be including the module
 * resposible for handling peer-to-peer
 * and socket requests.
 */

module.exports = (peer) => {
  peer.on('connection', (id) => console.log(`Connected: ${id}`));
};
