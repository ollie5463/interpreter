  
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
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
        extensions: [".ts", ".tsx", ".js"]
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