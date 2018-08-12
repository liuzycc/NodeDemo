/**
 * 
 * app.js  入口模块
 * 
 *    职责：
 *        启动服务
 *        做一些服务相关的配置
 *          模板引擎
            body-parse 解析表单 post 请求体
            提供静态资源服务
            监听端口 启动服务
        
          挂载路由
 * 
 */


var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var router = require('./router');
//使用模板引擎
app.engine('html', require('express-art-template'));
app.use('/node_modules',express.static('./node_modules/'));
app.use('/public',express.static('./public/'));

//配置body-parse
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//把路由容器挂载到 app 服务中
//挂载路由
app.use(router);

app.listen(3000,function(){
  console.log('Run...开始跑吧！！！');
})