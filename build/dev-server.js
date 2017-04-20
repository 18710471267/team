var config = require('../config')

var express = require('express')
var opn = require('opn')
var webpack = require('webpack')
var app = express()
var proxyMiddleware = require('http-proxy-middleware')
var compiler = webpack(require('./webpack.base.conf.js'))  //加载webpack的编译规则
//webpack-dev-middleware是关联webpack和express
var devMiddleware = require('webpack-dev-middleware')(compiler,{
    stats:{  
        colors:true, //为日志设置颜色
        chunks:false //编译时不显示chunks（块）输出
    } 
})

//https://www.npmjs.com/package/http-proxy-middleware
// app.use('/',proxyMiddleware({target:"http://192.168.2.14"}))
var proxyTable = config.dev.proxyTable
Object.keys(proxyTable).forEach(function(context){
    var options = proxyTable[context]
    if(typeof options === 'string'){
        options = {target:options}
    }
    app.use(proxyMiddleware(context,options))
})

app.use(devMiddleware)
app.use('/static',express.static('./static'))
var port = config.dev.port;
var url = 'http://localhost:'+port
app.listen(port,function(){
    opn(url)
})