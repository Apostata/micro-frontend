const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    
    new HtmlWebpackPlugin({
        title: 'Micro-frontend-restaurant',
        template: './index.html',
        inject: 'body'
    })
];