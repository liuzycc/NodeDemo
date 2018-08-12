//使用node很轻松的构建一个web服务器

//node中专门提供了一个核心模块:http
//http这个模块的职责就是帮助我们创建编写web服务器的


//1、加载http核心模块
var http = require('http');

//2、使用 http.createServer()方法创建一个web服务器
//  返回一个 Server 实例
var server = http.createServer();

//3、发请求-----接受请求-----处理请求----给个反馈(发送响应)

//注册request请求事件，当客户端请求过来，自动触发request请求事件，然后
//执行第二个参数，回调函数
server.on('request',function(){
  console.log('我收到客户端的请求了');
})


//4、启动服务器
//绑定端口号，启动服务器
server.listen(3000,function(){
  console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/ 来进行访问');
})