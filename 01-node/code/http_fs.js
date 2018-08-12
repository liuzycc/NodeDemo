var http = require('http');
var fs = require('fs');//文件操作模块

var server = http.createServer();//创建一个服务对象

server.on('request',function(req,res){
  var url = req.url;
  console.log(url);
  if(url == '/html')
  {
    var file = fs.readFile('../resource/index.html',function(err,data){
      if(err)
      {
        res.setHeader('Content-Type','text/plain;charset=utf-8');
        res.end('文件读取失败,请稍后重试');
      }
      else{
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end(data.toString());
      }
    })
  }
  else if(url == '/lzy')
  {
    var file1 = fs.readFile('../resource/lzy.js',function(err,data){
      if(err)
      {
        res.setHeader('Content-Type','text/plain;charset=utf-8');        
        res.end('文件读取失败,请稍后重试');
      }
      else{
        res.setHeader('Content-Type','text/html;charset=utf-8');
        res.end(data);
      }
    })
  }
  else{
    res.setHeader('Content-Type','text/plain;charset=utf-8');
    res.end('你想看点啥？');
  }
})
   
//开启监听
server.listen(5000,function(){
  console.log('开启监听...');
})