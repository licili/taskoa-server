let taskService = require('../service/taskService')
exports.getTaskList = async (req, res) => {
  let { limit = 10, page = 1, state = 1 } = req.query;
  let data = await taskService.getTaskList(limit, page, state);
  res.json({
    code: 0,
    msg: 'success',
    limit,
    page,
    list:data
  })
}
exports.addTask = async (req, res) => {
  let { task, time } = req.body;
  console.log(task);
  try {
    await taskService.addTask(task, time)
    res.json({
      code: 0,
      msg:'success'
    })
  } catch (error) {
    console.log('error'+error);
    res.json({
      code: 1,
      error
    })
  }
}
exports.removeTask = async (req, res) => {
  let _id  = req.query._id;
  try {
    let result = await taskService.removeTask(_id)
    if (result) {
      res.json({
        code: 0,
        msg:'success'
      })
    } else {
      res.json({
        code: 1,
        msg:'删除错误'
      })
    }

    } catch (error) {
      res.json({
        code: 0,
        msg:error
      })
    }
}
exports.completeTask = async (req, res) => {
  let _id  = req.query._id;
  try {
    let result = await taskService.completeTask(_id)
    if (result) {
      res.json({
        code: 0,
        msg:'success'
      })
      return;
    }
    res.json({
      code: 1,
      msg:'出了点小问题'
    })
    
    } catch (error) {
      res.json({
        code: 0,
        msg:error
      })
    }
}