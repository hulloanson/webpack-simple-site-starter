const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const path = require('path')
const webpack = require('webpack')
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 13004,
    compress: true,
    hot: true,
    disableHostCheck: true, // So it can be proxied
    host: '0.0.0.0',
    public: 'http://localhost:13004',
    watchContentBase: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackHarddiskPlugin(),
  ],
})
