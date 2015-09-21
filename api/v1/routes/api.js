// Models
var User = require('../models/user.js');

module.exports = function (app) {
	// Register Routes
	User.methods(['get', 'put', 'post', 'delete']);
	User.register(app, '/users');
}

