const mongoose = require('mongoose');

let CONFIG = require('../config')
// 连接DB

mongoose.connect(CONFIG.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
}, (err) => {
  if (err) {
    console.log('数据库连接失败' + err);
  } else {
    console.log('数据库连接成功' + CONFIG.DB);
  }
});

// 创建Shema
let TaskSchema = mongoose.Schema({
  task: String,
  state: {
    type: Number,
    default:1 // 默认未完成
  },
  // 预完成时间
  time: String,
  // 实际完成时间
  complete: String
})

// 生成model
let Task = mongoose.model('Task', TaskSchema);

module.exports = Task;






