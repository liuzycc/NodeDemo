var fs = require('fs');
fs.writeFile('write.txt','大家好，我是NodeJS',function(error){
  if(error)
  {
    console.log('文件写入失败');
  }
  else{
    console.log('文件写入成功');    
  }
})