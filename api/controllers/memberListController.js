'use strict';
exports.list_all_members = function(req, res) {
  res.json([{id: 2}, {id: 3}]);
};

exports.read_a_member = function(req, res) {
  res.json({id: 2});
};