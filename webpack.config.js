const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');

const config = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /public\/images\/.*\.svg$/, // your icons directory
                loader: 'svg-sprite-loader',
                options: {
                    extract: true,
                    mode: {
                        css: true, // Create a «css» sprite
                        view: true, // Create a «view» sprite
                        defs: true, // Create a «defs» sprite
                        symbol: true, // Create a «symbol» sprite
                        stack: true // Create a «stack» sprite
                    },
                    spriteFilename: '/images/icons.svg', // this is the destination of your sprite sheet
                }
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }]
            }
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new SpriteLoaderPlugin({
            plainSprite: true
        }),
        new HtmlWebpackPlugin({
            hash: true,
            title: 'React SVG sprite',
            template: './public/index.html',
            filename: 'index.html'
        })
    ],
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        port: 3000,
        open: true
    }
};

module.exports = config;