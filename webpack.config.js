  
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './main.js',
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
    // module: {
    //     rules: [
    //         { test: /\.tsx?$/, loader: "ts-loader" }
    //     ]
    // }
    plugins: [
        new HTMLWebpackPlugin({
            filename: 'index.html',
            inject: 'head',
            template: 'index.html'
        })
    ]
}