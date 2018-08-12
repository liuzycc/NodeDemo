//0.安装
//1.引包
var express = require('express');

//2. 创建你的服务器应用程序
//  也就是原来的 http.createServer()
var app = express();


//在express中开放资源就是一个API是事
//公开指定目录
//只要这样做了，你就可以直接通过/public/xx的方式访问 public 目录下的所有资源了
app.use('/public',express.static('./public'));

//模板引擎在express也是一个API的事


//当服务器收到get请求 / 的时候，执行回调处理函数
app.get('/',function(req,res){
  res.send('hello express!');
})
app.get('/about',function(req,res){
  res.send('关于我');
})

//相当于server.listen
app.listen(3000,function(){
  console.log('run...');
})