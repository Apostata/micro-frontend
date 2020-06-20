const path = require('path');
const loaders = require('./loaders');
const devServer = require('./devServer');
const plugins = require('./plugins');

const ENV = process.env.NODE_ENV;
const webpackConfig = {
    mode: ENV !== 'development' ? 'production' : 'development', //modo
    context: path.resolve(__dirname, '../src'),
    entry: {
        Restaurants:['./index.js']
    },
    output:{
        filename:'[name].js',
        publicPath:'/',
        path: path.resolve('/public')
    },
    devtool: ENV === 'production' ? 'source-map' : 'eval-source-map',
    module: {
        rules: loaders,
    },
    plugins,
    watch: true,
    resolve: {
        extensions: [ '.js']
    }
};

if(ENV === 'development' && devServer) {
    webpackConfig.devServer = devServer;
}

module.exports = webpackConfig;