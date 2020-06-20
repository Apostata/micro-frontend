const path = require('path');

module.exports = {
  contentBase: __dirname, // path para pegar os arquivos do servidor;
  compress: true, // enable gzip
  index: 'index.html',
  port: 3000,
  hot: true, // hot reload
  open: false, // initialize after bundle,
  overlay: true, // show errors overlay on screen
  https: false,
  historyApiFallback: true
  // proxy: {
  //   "/mf/*": {
  //     "changeOrigin": true,
  //     "cookieDomainRewrite": "localhost",
  //     "logLevel": "debug",
  //     "target": "http://localhost:3001",
  //     "secure": true,
  //     "pathRewrite": {
  //       "^/mf": ""
  //     }
  //   }
  // }
};