'use strict'
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(__dirname, '../src/index.js');
var BUILD_PATH = path.resolve(__dirname, '../dist');
module.exports = {
    entry: [
      // 'webpack/hot/only-dev-server',
       APP_PATH
    ],
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js',
        // publicPath: "/dist/"
    },
    devtool: 'eval-source-map',
    resolve: {//指定可以被import的文件名后缀
        extensions: ['.js', '.jsx','.sass','.less']
    },
    devServer:{
      open: true, // 自动打开服务器首页
      inline: true, // 实时刷新
      port: 8081
    },
    module: {
        loaders: [
          {
                test: /\.jsx?$/,
                loaders: ['babel-loader?presets[]=es2015,presets[]=stage-0,presets[]=react']
            }
        //   {
        //     test: /\.js?$/,
        //     exclude: /(node_modules|bower_components)/,
        //     loader: 'babel-loader',
        //     options: {
        //         presets: ['env', 'react'],
        //         plugins: ['transform-runtime']
        //     }
        // }
        ,{
            test: /\.css$/,
            loaders: [
                'style-loader',
                'css-loader'
            ]
        },
        {
            test: /\.less$/,
            loader: 'style-loader!css-loader?modules&localIdentName=[path]_[name]__[local]___[hash:base64:5]!less-loader'
        },
        {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        },
        //  {
        //       test: /\.svg$/,
        //       loader: 'svg-sprite-loader',
        // },
        {
             test:/\.(jpg|png|gif|jpeg)$/,
             use:[{
                 loader:'url-loader',
                 options:{
                     limit:20000
                 }
             }]
         },
         {
             test:/\.(ttf|eot|woff|woff2|svg)$/,
             use:['file-loader']//1.把你的资源移动到输出目录2.返回最终引入资源的url
         },
      ]
    },
    plugins:[
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: { warnings: false }
      // }),
      // new webpack.HotModuleReplacementPlugin()
    ]
}
