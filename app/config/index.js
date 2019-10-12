// Load .env
require('dotenv').config();

module.exports = {
  server: {
    port: process.env.SERVER_PORT || 6000,
    environment: process.env.NODE_ENV || 'development',
  },
};
