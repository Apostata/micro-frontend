const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const environments  = require('../../../container/config/variables');

const ENV = process.env.NODE_ENV;

const webpackConfig = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
];

if(ENV === 'standalone'){
    webpackConfig.push(
        new HtmlWebpackPlugin({
            title: 'Micro-frontend-restaurants',
            template: './index.html',
            inject: 'body',
            server_host: environments.SERVER_HOST
        })
    )
};

module.exports = webpackConfig;