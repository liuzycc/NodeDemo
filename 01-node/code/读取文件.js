

//使用require方法 加载 fs 核心模块
var fs = require('fs');

//读取文件
//第一个参数  就是读取文件的文件路径
//第二个参数  回调函数
// error

  // 成功
  // data 数据 
  // error null
  // 失败
  // data null
  // error 错误对象
fs.readFile('hello.txt',function(error,data){
  //默认文件中存储的都是二进制数据  0  1
  //这里看到的为什么不是0和1呢
  //原因是二进制转换成了十六进制
  //不管什么进制人们都不认识
  //所以我们可以通过toString转换下
  if(error)
  {
    console.log('文件读取失败');
    return;
  }
  console.log(data.toString());
})