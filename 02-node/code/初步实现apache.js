var http = require('http');
var fs = require('fs');
//创建一个服务
var server = http.createServer();
server.on('request',function(req,res){
  var url = req.url;
  if(url === '/')
  {
    fs.readFile('F:/黑马47期基础班/20180506晚上考试/刘子毅/index.html',function(error,data){
      if(error)
      {
        res.end('404 Not Found!!');
        return;
      }
      res.end(data);
    })
  }
  else if(url === '/110.jpg')
  {
    fs.readFile('F:\\黑马47期基础班\\20180506晚上考试\\刘子毅\\images\\110.jpg',function(err,data){
      if(err)
      {
        res.end('404 Not Found 110.jpg');
        return
      }
      res.end(data);
    })
  }
  else if(url === '/tj.jpg')
  {
    fs.readFile('F:\\黑马47期基础班\\20180506晚上考试\\刘子毅\\images\\tj.jpg',function(err,data){
      if(err)
      {
        res.end('404 Not Found 110.jpg');
        return
      }
      res.end(data);
    })
  }
  else {
    res.end('目前只有这么多了');
  }
})

//监听端口号
server.listen(3000,function(){
  console.log('run ...... ');
})