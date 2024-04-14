const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    mode: 'development',
    devServer: {
        static: false,
    },
    entry: './src/index.js',
    devtool: 'inline-source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index_bundle.js',
    },
};