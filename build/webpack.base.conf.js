var HtmlwebpackPlugin=require('html-webpack-plugin') 
module.exports = {
    entry:'./src/entry.js',
    output:{
        path:'/',//必须是绝对路径
        filename:'bundle.js'
    },
    resolve:{
        alias:{
            'vue$':'vue/dist/vue'
        }
    },
    module:{
        loaders:[
            {
                test:/\.vue$/,
                loader:'vue-loader'
            }
        ]
    },
    plugins:[
        new HtmlwebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:true
        })
    ]
}