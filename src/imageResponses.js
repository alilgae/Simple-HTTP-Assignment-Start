const fs = require('fs'); // file system

const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getPNG = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongegar);
  response.end();
};

module.exports = { getPNG };
