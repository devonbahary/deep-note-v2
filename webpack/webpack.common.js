const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './client/App.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ["babel-loader"]
        }, {
            test: /\.s[ac]ss$/i,
            use: [
              "style-loader", // creates `style` nodes from JS strings
              "css-loader", // translates CSS into CommonJS
              "sass-loader", // compiles Sass to CSS
            ],
        }],
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html'
        }),
    ],
};