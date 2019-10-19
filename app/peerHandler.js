/**
 * This file will be including the module
 * resposible for handling peer requests
 */
module.exports = (peer) => {
  peer.on('connection', (id) => console.log(`Connected: ${id}`));
};
