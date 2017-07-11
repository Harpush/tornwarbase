'use strict';
module.exports = function(app) {
  var todoList = require('../controllers/memberListController');

  app.route('/members')
    .get(todoList.list_all_members);

  app.route('/members/:memberId')
    .get(todoList.read_a_member);
};