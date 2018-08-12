function fn(callback){
  setTimeout(function(){
    var data = 'hello';
    callback(data);
  },1000);
}

function cc(data){
  console.log(data);
}
fn(cc);