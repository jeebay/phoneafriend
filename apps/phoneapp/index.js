var express = require('express');
var app = module.exports = express();

// requiring node-jsx extends `require` to handle transpilation of .js/jsx files to vanilla JS for use in server-side rendering
// keep this line beneath browserify to not double translate .js files requested by the browser
require("babel/register");

// set ./views as the views path
app.set('views', __dirname + '/views');

// use ejs as the template engine
app.set('view engine', 'ejs');


app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

require('./routes/router.js')(app);