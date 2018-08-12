var http = require('http');
var fs = require('fs');
//创建一个服务
var server = http.createServer();
server.on('request',function(req,res){
  var url = req.url;
  var dir = 'F:/黑马47期基础班/20180506晚上考试/刘子毅';
  fs.readFile(dir + url,function(err,data){
    if(err){
      res.end('404 Not Found');
      return;
    }
    fs.readdir(dir,function(err,files){
      if(err){
        return res.end('Can not find dir');
      }
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
      //添加到页面上
      data = data.toString();
      data = data.splic(data.indexOf('<tbody>'),0,content);
      // console.log(files);
      console.log(data);
    })
    res.end(data);
  })
})

//监听端口号
server.listen(3000,function(){
  console.log('run ...... ');
})