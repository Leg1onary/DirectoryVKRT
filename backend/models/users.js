var connection = require('./backend/connection');

module.exports.findAll = function(callback) {
  var sql = `
		SELECT * FROM vkrt_users
	`
  connection.query(sql, callback);
}

module.exports.sendResponse = function(success, res) {
  if(success) {
    res.send({'success': true});
  } else {
    res.send({'success': false});
  }
}
