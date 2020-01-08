const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const root = path.join(__dirname);
const src = path.join(root, 'src');
const dist = path.join(root, 'dist');

module.exports = {
    entry: [
        'babel-polyfill',
        'react-hot-loader/patch',
        'whatwg-fetch',
        path.join(src, 'index.js'),
    ],
    output: {
        filename: 'bundle.js',
        library: 'ToDo',
        libraryTarget: 'umd',
        path: dist,
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    babelrc: true,
                },
            },
            {
                test: /\.htm(l)?$/,
                exclude: [
                    path.join(root, 'node_modules'),
                ],
                loader: 'html-loader',
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            appMountId: 'app',
            devServer: 'http://localhost:3001',
            inject: false,
            template: require('html-webpack-template'),
            title: 'Github React Tutorial',
        }),
    ],
    devtool: 'cheap-module-eval-source-map',
    target: 'web',
    devServer: {
        contentBase: path.join(src, 'public'),
        port: 9001,
    },
};
