var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();


//开放资源
app.use('/node_modules',express.static(path.join(__dirname,'./node_modules/')));
app.use('/public',express.static(path.join(__dirname,'./public/')));

//配置art-template
app.engine('html', require('express-art-template'));
//配置render查找的默认路径
app.set('views',path.join(__dirname,'./views'));

app.get('/',function(req,res){
  res.render('index.html',{name:'lzy'});
})

app.listen(5000,function(){
  console.log('running...');
})