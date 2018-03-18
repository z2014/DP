var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractPlugin = require('extract-text-webpack-plugin')
var webpack = require('webpack')
var path = require('path')

const webpackConfig = function(entry, output, pageId) {
    return {
        entry: {    
            entry : [`${__dirname}/${entry}`, 'whatwg-fetch'],
            vendor: ['react', 'react-dom']
        },
        output: {   
            path: output,
            publicPath: `/dist/${pageId}/`,
            chunkFilename: '[name].js',
            filename: '[name].js'
        },
        resolve: {
            extensions: ['.js', '.jsx','style', '.less'],
            alias: {
                '@style': path.resolve(__dirname + '/../scripts/style')
            }
        },
        module: {
            loaders: [{
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env', 'stage-0'],
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
            //     filename: '../../../templates/preview.ejs'
            // }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                chunks: 'vendor'
            }),
            new ExtractPlugin('bundle.css')
        ]
    }
}

module.exports = webpackConfig