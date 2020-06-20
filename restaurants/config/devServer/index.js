const path = require('path');

module.exports = {
  contentBase: path.join(__dirname, '../public'), // path para pegar os arquivos do servidor;
  compress: true, // enable gzip
  index: 'index.html',
  port: 3001,
  hot: true, // hot reload
  // open: true, // initialize after bundle,
  overlay: true, // show errors overlay on screen
  https: false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  }
};