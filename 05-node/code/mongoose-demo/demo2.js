var mongoose = require('mongoose');

var Schema = mongoose.Schema;

//1.链接数据库
//指定链接的数据库
mongoose.connect('mongodb://localhost/test');

//2.设计文档结构(表结构)
//字段名称就是表结构中的属性名称
//约束的目的是为了保证数据的完整性，不要有脏数据
var userSchema = new Schema({
  username:{
    type:String,
    require:true //必须有 （不能为空）
  },
  password:{
    type:String,
    require:true
  },
  email:{
    type:String
  }
})
//3.将文档结构发布为模型
// mongoose.model 方法就是用来将一个架构发布为model
// 第一个参数：传入一个大写名词单数字符串用来表示你的数据库名称
//     mongoose 会自动将大写名词的字符串生成 小写复数 的集合名称
//       例如这里的 User 最终会变为 users 集合名称
// 第二个参数：架构 Schema
//
// 返回值：模型构造函数
var User = mongoose.model('User',userSchema);

//4. 当我们有了模型构造函数之后，就可以使用这个构造函数对 users 集合中的数据为所以为了（增删改查）

// 添加数据
// var admin = new User({
//   username:'张三',
//   password:'123456',
//   email:'552019419@qq.com'
// })

// admin.save(function(err,ret){
//   if(err)
//   {
//     console.log('保存失败');
//   }
//   else {
//     console.log('保存成功');
//     console.log(ret);
//   }
// })

// 查询 所有
// User.find(function(err,ret){
//   if(err)
//   {
//     console.log('查询失败');
//   }
//   else {
//     console.log(ret);
//   }
// })

// 查询  刘子毅那条数据
// User.findOne({
//   password:'123456'
// },function(err,ret){
//   if(err)
//   {
//     console.log('查询失败');
//   }
//   else {
//     console.log(ret);
//   }
// })

//删除
// User.remove({
//   username:'张三'
// },function(err,ret){
//   if(err)
//   {
//     console.log('删除失败');
//   }
//   else {
//     console.log('删除成功');
//     console.log(ret);
//   }
// })

//更新
//这个是根据Id更新
//第一个参数  数据的ID
//第二个参数  要修改字段的对象
//第三个参数  回调函数 接收结果
User.findByIdAndUpdate('5b614ccebd110221e47a67af',{
  password:'456'
},function(err,ret){
  if(err)
  {
    console.log('更新失败');
  }
  else {
    console.log('更新成功');
    console.log(ret);
  }
})