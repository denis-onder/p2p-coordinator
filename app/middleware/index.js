const { json, urlencoded } = require('body-parser');
const logger = require('./logger');

module.exports = (app) => {
  app.use(json());
  app.use(urlencoded({ extended: true }));
  logger(app);
};
