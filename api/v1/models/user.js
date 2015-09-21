// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var userSchema = new mongoose.Schema({
	name: String,
	email: String,
	phoneNumber: String
});

// Expose the model
module.exports = restful.model('Users', userSchema);