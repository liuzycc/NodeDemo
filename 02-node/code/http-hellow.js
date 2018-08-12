var http = require('http');

// 1 创建 server 服务
var server = http.createServer();

server.on('request',function(req,res){
  var url = req.url;
  if(url == '/')
  {
    res.end('hello word');
  }
  else{
    res.end('404 Not Found');
  }
})

//绑定端口号，启动服务
server.listen(3000,function(){
  console.log('服务已经开启run....');
})