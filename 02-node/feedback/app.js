var http = require('http');
var fs = require('fs');
var urlRequire = require('url'); //加载url模块
var template = require('art-template');

//模拟数据
var currentData = [
  {name:'张三',message:'我是张三',dateTime:'2018-07-22'},
  {name:'张三',message:'我是张三',dateTime:'2018-07-22'},
  {name:'张三',message:'我是张三',dateTime:'2018-07-22'},
  {name:'cc',message:'我是CC',dateTime:'2018-07-22'},
  {name:'张三',message:'我是张三',dateTime:'2018-07-22'},
  {name:'张三',message:'我是张三',dateTime:'2018-07-22'},
  {name:'霉霉',message:'我是霉霉',dateTime:'2018-07-22'}
];


//如果要请求public 中的资源，路径要写成   /public/lib/xxx   这种形式
http.createServer(function(req,res){  //简写方式
  //读取文件返回给浏览器
  var url = req.url;
  var urlObj = urlRequire.parse(req.url,true);
  if(url == '/')
  {
    //这里请求的起始页面
    fs.readFile('./view/index.html',function(err,data){
      if(err)
      {
        return res.end('404 not is defined');
      }
      //利用模板引擎渲染数据
      data = template.render(data.toString(),{list:currentData});
      res.end(data);
    })
  }
  else if (url.indexOf('public') != -1){
    //这里请求的是public中的资源
    url = '.' + url;
    fs.readFile(url,function(err,file){
      if(err)
      {
        return res.end('404 not is defined');
      }
      res.end(file);
    })
  }
  else if(url == '/post')
  {
    fs.readFile('./view/post.html',function(err,file){
      if(err)
      {
        return res.end('404 not is defined');
      }
      res.end(file);
    })
  }
  else if(urlObj.pathname == '/pinglun')
  {
    //这里判断的是post.html  中get方式的表单提交
    //query: { name: 'cccccc', message: 'dfdfdfdfdfd' }
    var query = urlObj.query;
    query.dateTime = '2018-07-22';
    //把数据添加到数据数组中  这时的数据不能持久化   这里我们先不考虑持久化
    //这里存储的数据是临时的这时候的数据是存在内存空间中的，
    //当服务器重启时数据就会没有，对应的内存空间会释放掉
    currentData.unshift(query);
    //返回首页
    //这里返回首页使用服务器让客户端重定向
    //1.状态码设置为302临时重定向
    //    statusCode 状态码
    //2.在响应头中通过Location 告诉客户端往哪里重定向
    //    setHeader  设置响应头
    //如果客户端发现收到服务器的响应的状态码是 302 就会自动去响应location
    //所以你就会看到客户端自动跳转了
    res.statusCode = 302;
    res.setHeader('Location','/');
    res.end();

  }
  else {
    //跳转404
    fs.readFile('./view/404.html',function(err,file){
      if(err){
        return res.end('404.html is not defined');
      }
      res.end(file);
    })
  }
  
}).listen(3000,function(){
  console.log('Run....');
})