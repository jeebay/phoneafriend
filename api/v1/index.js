// Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

// MongoDB connection
mongoose.connect('mongodb://localhost/rest_text');

// Initialize Express and parse body with bodyParser
var app = module.exports = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Set up routes
require('./routes/api.js')(app);
