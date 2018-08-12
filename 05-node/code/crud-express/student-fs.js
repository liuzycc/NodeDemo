//就是用来封装  数据操作
// 封装增删该查
// 数据操作文件模块 

var fs = require('fs');
var dbpath = './db.json';

/**
 * 获取学生数据
 * return []
 * callback 中的参数
 * 第一个参数是err
 * 成功  第一个参数是 null 第二个参数是数组
 * 失败  第一个参数是err失败对象  第二个参数undefined
 */

  exports.findStuInfo = function(stuId,callback){
    fs.readFile(dbpath,'utf8',function(err,file){
      if(err)
      {
        return callback(err);
      }
      //获取students数组
      var students = JSON.parse(file).students;
      if(stuId == null)return callback(null,students);
      for(var i=0;i<students.length;i++)
      {
        if(students[i].id == stuId)
        {
          var arr = [];
          arr.push(students[i]);
          return callback(null,arr);
        }
      }
      var arr1 = [];
      return callback(null,arr1);
      
    })
  }

/**
 * 添加学生信息
 */

 exports.save = function(obj,callback){
   fs.readFile(dbpath,'utf8',function(err,file){
     if(err) return callback(err);
      //获取students数组
      var data = JSON.parse(file);
      var newId = data.students.length;
      obj.id = newId;
      data.students.push(obj);
      var fileData = JSON.stringify(data);
      fs.writeFile(dbpath,fileData,function(err){
        if(err)return callback(err);
        callback(null);
      });
      
   })
 }

 /**
  * 删除学生信息
  */

  exports.delete = function(id,callback){
    if(!id) return callback('delete info error');
    fs.readFile(dbpath,'utf8',function(err,data){
      if(err)return callback(err);
      
      var students = JSON.parse(data);
      for(var i=0;i<students.students.length;i++)
      {
        if(students.students[i].id == id)
        {
          // console.log(students.students[i])
          students.students.splice(i,1);
        }
      }
      console.log(students);
      // 保存到文件中
      fs.writeFile(dbpath,JSON.stringify(students),function(err){
        if(err)return callback('delete info error');
        callback(null);
      })
    })
  }

  /**
   * 更新学生信息
   */

   exports.update = function(obj,callback){
    //获取学生信息
    var id = obj.id;
    //获取所有学生信息
    fs.readFile(dbpath,'utf8',function(err,data){
      if(err)return callback(err);
      var tempObj = JSON.parse(data);
      for(var i=0;i<tempObj.students.length;i++)
      {
        if(tempObj.students[i].id == id)
        {
          tempObj.students[i] = obj;
        }
      }
      //到这里tempObj里面就是替换好的数据对象了
      //这里我们再把数据重新覆盖到json文件中
      console.log(tempObj);
      fs.writeFile(dbpath,JSON.stringify(tempObj),function(err){
        if(err)return callback(err);
        callback(null);
      })
    })
   }

   //封装获取全部学生信息
   function getStuInfo(stuId,callback){
    fs.readFile(dbpath,'utf8',function(err,file){
      if(err) return callback(err);
      //获取students数组
      var students = JSON.parse(file).students;
      if(stuId == null)return callback(null,students);
      for(var i=0;i<students.length;i++)
      {
        if(students[i].id == stuId)
        {
          var arr = [];
          arr.push(students[i]);
          return callback(null,arr);
        }
      }
      var arr1 = [];
      return callback(null,arr1);
    })
   }