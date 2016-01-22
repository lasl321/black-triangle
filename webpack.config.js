var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: [
        'babel-polyfill',
        './src/main',
        'webpack-dev-server/client?http://localhost:8080'
    ],
    output: {
        publicPath: '/scripts',
        filename: 'foo.js'
    },
    devtool: 'source-map',
    devServer: {
        contentBase: "./src"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ["es2015"],
                }
            }
        ]
    },
    debug: true
};
