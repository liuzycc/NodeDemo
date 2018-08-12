var http = require('http');
var fs = require('fs');
var template = require('art-template');

//创建一个服务
var server = http.createServer();
//开启响应事件
server.on('request',function(req,res){
  var url = req.url;
  var dir = 'G:\\2018前端视频\\14.nodejs\\02-node\\videos';
  //读取文件
  fs.readFile('index.html',function(err,data){
    if(err)
    {
      return res.end('not index.html');
    }
    // 获取当前文件夹中的目录
    fs.readdir(dir,function(err,files){
      if(err)
      {
        return res.end('dir is not defined');
      }
      console.log(files);//数组的形式
      //这里只需要使用模板引擎替换data中的字符串就可以了
      //数据就是files
      //然后去你的html文件中编写模板引擎语法就行了
      var htmlstr = template.render(data.toString(),{
        files:files
      });
      data = htmlstr;
      res.end(data);
    })
    
  })
})
//绑定监听端口
server.listen(3000,function(){
  console.log('Run...');
})