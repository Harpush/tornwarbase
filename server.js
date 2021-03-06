var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  //Task = require('./api/models/todoListModel'),
  //bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

var routes = require('./api/routes/memberListRoutes');
routes(app);

app.listen(port);

console.log('member list RESTful API server started on: ' + port);