var fs = require('fs');
function getFile(url){
  return new Promise(function(resolve,reject){
    fs.readFile(url,'utf8',function(err,data){
      if(err)
      {
        reject(err);
      }
      else{
        resolve(data);
      }
    })
  })
}

getFile('./a.txt')
  .then(function(data){
    console.log(data);
    return getFile('./b.txt');
  })
  .then(function(data){
    console.log(data);
    return getFile('./c.txt');
  })
  .then(function(data){
    console.log(data);
  })