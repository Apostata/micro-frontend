const path = require('path');
const ENV = process.env.NODE_ENV;

module.exports = {
  contentBase: path.join(__dirname, '../public'), // path para pegar os arquivos do servidor;
  compress: true, // enable gzip
  index: 'index.html',
  port: 3001,
  hot: true, // hot reload
  open:  ENV==='standalone'? true : false,
  overlay: true, // show errors overlay on screen
  https: false,
  historyApiFallback: ENV==='standalone'? true : false,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
    "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
  }
};