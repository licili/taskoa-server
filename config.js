module.exports = {
  PORT: 8000,
  DB:'mongodb://127.0.0.1/taskoa'
}

// DB_URL = 'mongodb://admin:sunjianping@localhost:27017/changxiang';
// DB_URL = 'mongodb://admin:sunjianping@mongodb/changxiang';

// mongodb://mongo/taskoa


// docker run -i -t --name taskserver --link=mongodb:mongo lici/taskserver /bin/bash
// docker run -i -t --name taskserver --link=mongodb:mongo lici/taskserver -d