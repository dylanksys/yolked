var express = require ('express');
var stu = require('../routers/stu');
var aori = require('../routers/aori');

var app = express();

app.use('/', stu);
app.use('/', aori);

app.listen(9000, function () {
  console.log('bulkingup listening on port 9000');
};
