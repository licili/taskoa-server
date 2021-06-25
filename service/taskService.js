const TaskModel = require('../model/taskModel')

exports.getTaskList = (limit = 10, page = 1, state = 0) => {
  
  return TaskModel.find(state == 0 ? {}:{state}).skip((page - 1) * limit).limit(limit);
}
exports.addTask = (task, time) => {
    return  TaskModel.create({task,time})
}
exports.removeTask = (id) => {
  return TaskModel.findByIdAndRemove({_id:id})
}
exports.completeTask =  (id) => {
 return TaskModel.findByIdAndUpdate(id, { state:2 ,complete:new Date().toLocaleString()})
}