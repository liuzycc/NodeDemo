/**
 * 
 * 路由模块
 *   职责：
 *    处理路由
 *    根据不同的请求路径，处理对应的方法操作
 * 
 *    模块职责要单一，不要乱写
 *    
 * 
 */



//Express提供了一种更好的方式,专门用来包装路由的
var express = require('express');
var fs = require('fs');
//创建路由容器
var router = express.Router();
var studentFn = require('./student');
// var query = require('')
//我们把路由都放在routre容器中

//获取json文件中的学生数据信息
// var students = [];
// fs.readFile('./db.json','UTF8',function(err,data){
//   if(err)
//   {
//     return res.status(500).send('服务器错误');
//   }
//   else{
//     students = JSON.parse(data).students;
//   }
// })

//学生信息首页(展示页)
router.get('/students',function(req,res){
  studentFn.findStuInfo(null,getData);
  //创建回调函数
  function getData(err,arr){
    if(err) return res.send('获取学生信息失败');
    res.render('index.html',{
      fruits:['香蕉','苹果','鸭梨','西瓜'],
      students:arr
    })
  }
});

//跳转到添加学生信息页面
router.get('/students/new',function(req,res){
  res.render('new.html');
})

//添加学生信息
router.post('/students/new',function(req,res){
  studentFn.save(req.body,function(ret){
    if(ret)return res.send('保存失败');
    //返回首页
    res.redirect('/students');

  })
})

/**
 * 跳转编辑页面
 */
router.get('/students/edit',function(req,res){
  var id = req.query.id;
  //获取当前用户数据
  studentFn.findStuInfo(id,getData);
  function getData(err,arr){
    if(err) return res.send('获取学生信息失败');
    console.log(arr);
    res.render('edit.html',{
      fruits:['香蕉','苹果','鸭梨','西瓜'],
      list:arr[0]
    })
  }
})

/**
 * 编辑学生信息
 */
router.post('/students/edit',function(req,res){
  var params = req.body;
  studentFn.update(params,function(err){
    if(err)return res.render('更新失败');
    res.redirect('/students');
  })
})

/**
 * 删除学生信息
 */
router.get('/students/delete',function(req,res){
  var id = req.query.id;
  studentFn.delete(id,function(msg){
    if(msg) return res.render('删除失败');
    res.redirect('/students');
  })
})

// 返回jquery第三方js
// router.get('/jquery',function(req,res){
//   // fs.readFile('.')
// })

//这里只需要返回一个router容器就可以了
module.exports = router;


//这样也不好
// module.exports = function(app){
//   app.get('/students',function(req,res){
//     //readFile 第二个参数是可选的，传入第二个参数是告诉他，把读取的文件直接按照UTF-8编码，转换成我们可以读懂的字符串
//     fs.readFile('./db.json','UTF8',function(err,data){
//       if(err)
//       {
//         return res.status(500).send('服务器错误');
//       }
//       else{
//         res.render('index.html',{
//           fruits:['香蕉','苹果','鸭梨','西瓜'],
//           students:JSON.parse(data).students
//         });
//       }
//     })
//   });
// }

