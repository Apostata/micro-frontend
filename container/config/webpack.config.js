const path = require('path');
const loaders = require('./loaders');
const devServer = require('./devServer');
const plugins = require('./plugins');

const ENV = process.env.NODE_ENV !== 'development' ? 'production' : 'development'
console.log(ENV);
const webpackConfig = {
    mode: ENV, //modo
    context: path.resolve(__dirname, '../src'),
    entry: {
        main:['./index.js']
    },
    output:{
        filename:'js/[name].js',
        path: path.resolve(__dirname, '../public'),
        publicPath:'/'
    },
    devtool: ENV === 'production' ? 'source-map' : 'eval-source-map',
    module: {
        rules: loaders,
    },
    plugins,
    watch: ENV === 'development'? true : false,
    resolve: {
        alias: {
            Actions: path.resolve(__dirname, '../src/store/actions/'), //to dynamic import
        },
        extensions: [ '.js']
    }
};

if(ENV === 'development' && devServer) {
    webpackConfig.devServer = devServer;
}

module.exports = webpackConfig;