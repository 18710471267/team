
var baseWebpackConfig = require('./webpack.base.conf')
var path = require('path')
var merge = require('webpack-merge')
var webpackConfig = merge(baseWebpackConfig,{
    output:{
        path:path.resolve(__dirname,'../dist'),//__dirnamenode的全局变量，当前本地的根目录
        filename:'js/bundle.js'
    }
}) 
console.log(__dirname)
module.exports = webpackConfig