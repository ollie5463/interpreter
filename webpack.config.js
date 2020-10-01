  
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const isProduction = !!(process.env.NODE_ENV === 'production');
const DropConsoleWebpackPlugin = require('drop-console-webpack-plugin');

const config = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    mode: 'production',
    devServer: {
        open: true
    },
    resolve: {
        extensions: [".js"]
    },
    devtool: "source-map",
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            inject: 'head',
            template: 'index.html'
        })
    ]
}
if (isProduction) {
    config.plugins.push(new DropConsoleWebpackPlugin())
}

module.exports = config;