var express = require('express');
var app = express();

//配置tar-template

//当渲染的文件后缀是 .art 结尾的(可以修改html这种也可以) 就使用art-template
app.engine('html',require('express-art-template'))

app.get('/',function(req,res){
 //Express 为 Response 响应对象提供了一个方法: render
 //render 方法默认是不可以使用，但是如果配置了模板引擎就可以使用了
 //res.render('html模板名',{模板数据});
 //render这里默认找到的是根目录下的文件
 //render这里必须是  .art  后缀的文件
  res.render('404.html');
})
app.get('/admin/index',function(req,res){
  res.render('admin/index.html',{title:'这个是模板数据字符串'});
})
//监听端口号
app.listen(3000,function(){
  console.log('Run....跑起来');
})