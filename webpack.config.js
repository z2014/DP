var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')
var path = require('path')


module.exports = {
    entry: {	
        entry : ['./scripts/src/entry.js', 'whatwg-fetch'],
        vendor: ['react', 'react-dom']
    },
    output: {	
        path: __dirname + '/public',
        publicPath: '/',
        chunkFilename: '[name].js',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx','style', '.less'],
        alias: {
            '@style': path.resolve(__dirname + '/scripts/style')
        }
    },
    module: {
	    loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'env'],
                plugins: ['transform-decorators-legacy', 'add-module-exports']
            }
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            use: ExtractPlugin.extract({
                fallback: 'style-loader',
                use: ['css-loader','less-loader']
            })
        }]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './scripts/template/index.html',
        //     chunks: ['entry', 'vendor'],
        //     filename: '../templates/backend.ejs'
        // }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            chunks: 'vendor'
        }),
        new ExtractPlugin('bundle.css')
    ]
}