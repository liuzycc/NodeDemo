var http = require('http');
var fs = require('fs');
//创建服务
var server = http.createServer();

server.on('request',function(req,res){
  var url = req.url;
  var dir = 'G:/2018前端视频'
  fs.readFile('template.html',function(err,data){
    if(err){
      res.end('404');
      return;
    }
    fs.readdir(dir,function(err,files){
      if(err)
      {
        return res.end('没有找到dir对应的目录');
      }
      console.log(files);
      var content = '';
      files.forEach(function(item){
        content += `
        <tr>
          <td data-value="images/">
            <a class="icon dir" href="/F:/%E9%BB%91%E9%A9%AC47%E6%9C%9F%E5%9F%BA%E7%A1%80%E7%8F%AD/20180506%E6%99%9A%E4%B8%8A%E8%80%83%E8%AF%95/%E5%88%98%E5%AD%90%E6%AF%85/images/">${item}
            </a>
          </td>
          <td class="detailsColumn" data-value="0"></td>
          <td class="detailsColumn" data-value="1512747342">2017/12/8 下午11:35:42</td>
        </tr>
        `
      })
      data = data.toString();
      data = data.replace('^_^',content);
      console.log(data);
      res.end(data);
    })
   
    
  })
})


//开始监听
server.listen(3000,function(){
  console.log('Run...');
})