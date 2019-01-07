'use strict'
const path = require('path')
const webpack = require('webpack');
const merge = require('webpack-merge')
const baseWebpackConfig = require('./webpack.base.conf')
const HtmlWebpackPlugin = require('html-webpack-plugin')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const prodWebpackConfig = merge(baseWebpackConfig, {
    devtool: 'cheap-module-source-map', //默认选项
    plugins: [
        new HtmlWebpackPlugin({
          title: '首页',
          template: './src/index.html',
          favicon: '',
          filename: 'index.html'
        }),
        // copy custom static assets
        // new CopyWebpackPlugin([
        //     {
        //         from: path.resolve(__dirname, '../static'),
        //         to: path.resolve(__dirname, '../dist/static'),
        //         ignore: ['.*']
        //     }
        // ])
    ]
})

module.exports = prodWebpackConfig
