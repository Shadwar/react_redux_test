var path = require('path');
const webpack = require('webpack');
const publicPath = './dist/build';
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: './src/index.js',
    watch: true,

    output: {
        path: path.resolve(__dirname, publicPath),
        filename: 'app.js',
        publicPath: publicPath,
        sourceMapFilename: 'app.map'
    },

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.js|.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            }
        ]
    },

    devServer: {
        port: 3000,
        host: 'localhost',
        noInfo: false,
        publicPath: publicPath,
        contentBase: path.join(__dirname, publicPath)
    }
}