const path = require('path');
const loaders = require('./loaders');
const devServer = require('./devServer');
const plugins = require('./plugins');

const ENV = process.env.NODE_ENV;
const webpackConfig = {
    mode: ENV !== 'development' || ENV !== 'standlone' ? 'production' : 'development', //modo
    context: path.resolve(__dirname, '../src'),
    entry:{   
        Order:['./index.js']
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
        extensions: [ '.js'],
        alias: {
            Store: path.resolve(__dirname, '../../container/src/store/'),
            Actions: path.resolve(__dirname, '../../container/src/store/actions'),
            Reducers: path.resolve(__dirname, '../../container/src/store/Reducers'),
            redux: path.resolve(__dirname, '../../container/node_modules/redux/lib/redux.js'),
            'react-redux': path.resolve(__dirname, '../../container/node_modules/react-redux/lib/'),
            'redux-thunk': path.resolve(__dirname, '../../container/node_modules/redux-thunk/lib/'),
        },
    },
    externals : {
        'react': 'React',
        'react-dom': 'ReactDOM'
    }
};

if(ENV !== 'production' && devServer) {
    webpackConfig.devServer = devServer;
}


module.exports = webpackConfig;