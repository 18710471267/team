// env.NODE_ENV = 'production'
require('shelljs/global') //shelljs对window和linux里面的方法进行封装
var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf')
var assetsPath='./dist/static'
rm('-rf','./dist')  //删除老的dist
mkdir('-p',assetsPath) //创建dist和static
cp('-R','static/*',assetsPath) //将static下面的内容全部拷贝到dist/static下面
webpack(webpackConfig,function(err,stats){

})
