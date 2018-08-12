
var http = require('http');



var server = http.createServer();



server.on('request',function(request,response){
  console.log('我收到客户端的请求了,请求路径是：' + request.url);;

  //response 对象有一个方法:write 可以用来给客户端发送响应数据
  //write可以使用多次，但是最后一定要使用  end  来结束响应
  //否则客户端会一直等待接受响应
  if(request.url == '/login')
  {
    response.write('index page');
    response.end();
    return;
  }
  if(request.url == '/register')
  {
    response.write('register');
    response.end();
    return;
  }
  if(request.url == '/haha')
  {
    response.write('haha');
    response.end();
    return;
  }

  //告诉客户端，响应数据发送完毕
  // response.end('hellow nodeJs');
  response.end(request.url);


})


server.listen(3000,function(){
  console.log('服务器启动成功了，可以通过http://127.0.0.1:3000/ 来进行访问');
})