var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('phone.db');

var app = module.exports = express();



app.get('/', function(req, res) {
    res.json({"endpoints": ["users"]});
});

app.get('/users', function(req, res) {
    res.json({"message": "i've done it!"});
});