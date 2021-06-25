const express = require('express');
const config = require('./config');
const controller = require('./controller');
const path = require('path');
const app = express();

// 静态文件中间件
app.use(express.static(path.join(__dirname, 'public')));

// bodyParser 内置了
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// CORS
app.use(require('./middleware/cors')())


// TASK OA API
app.get('/getTaskList', controller.getTaskList)
app.post('/addTask', controller.addTask)
app.get('/removeTask', controller.removeTask)
app.get('/completeTask', controller.completeTask)

app.listen(config.PORT, () => {
  console.log(`SERVER IS RUNNING AT ${config.PORT}`);
})
