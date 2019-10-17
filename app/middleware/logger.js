const morgan = require('morgan');
const { createWriteStream, existsSync, mkdirSync } = require('fs');
const { join, resolve } = require('path');

module.exports = (app) => {
  const folderPath = resolve(__dirname, '../logs');
  if (!existsSync(folderPath)) {
    mkdirSync(folderPath);
  }
  const stream = createWriteStream(join(folderPath, 'access.log'), {
    flags: 'a',
  });
  app.use(
    morgan('combined', {
      stream,
    }),
  );
};
