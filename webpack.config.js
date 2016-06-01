   /*
    * Issues
    * https://github.com/chemdemo/chemdemo.github.io/issues/13
    * Notes
    * __dirname 是应用程序的当前目路
    * webpack 配置
    * content 是配置root的路径也就是应用的根路径
    * __dirname 当前目录
    * 如果不写路劲则从node_modules下查找可以使用命令webpack --display-error-details定位
    * entry: "./main",
    * path: 打包文件存放的绝对路径 
    * publicPath: 网站运行时的访问路径 
    * filename:打包后的文件名
    */

var path = require('path');

console.log(__dirname);
//console.log(__filename);
//console.log(process.cwd());
//console.log(path.resolve('./'));

//var deveServerConfig = {
    //historyApiFallback: true,
    //hot: true, //热替换
    //inline: true, //热加载
    //grogress: true //是否打印详情

//}
var webpackConfig = {
    context: __dirname + "/src",
    entry: "./main",
    output: {
        path: __dirname + "/dist",
        publicPath: "/dist/",
        filename: "build.js"
    },
    devServer: {
      inline: true,
      hot:true,
      historyApiFallback:true
    },
    module: {
        loaders: [
            { test: /\.css$/,
              loader: "style!css"
            },
            { test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader'
            }
        ]
    }
}

module.exports = webpackConfig;
