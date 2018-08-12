var express = require('express');
var app = express();
app.use('/public',express.static('./public'));
//当省略第一个参数时，默认是'/'
// app.use(express.static('./public'));

app.get('/',function(req,res){
  res.send('hello worldccddddddwww');
})
app.listen(3000,function(){
  console.log('Run....跑起来!!');
})
