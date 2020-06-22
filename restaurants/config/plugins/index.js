const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const ENV = process.env.NODE_ENV;

module.exports = [
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(ENV)
    }),
    new HtmlWebpackPlugin({
        title: 'Micro-frontend-restaurant',
        template: './index.html',
        inject: 'body'
    })
];