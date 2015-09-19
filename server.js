var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
var env = require('node-env-file');

// use the environment variables in the ./.env file
env(__dirname + '/.env');


// if in the development environment, transpile assets on request in development
// run gulp in production 
if ('development' == process.env.NODE_ENV) {
    
    app.use(require('browserify-dev-middleware')({
    src: path.resolve(__dirname),
    transforms: [require('reactify')]
    }));
}

// route static file requests to ./public
app.use(express.static(path.join(__dirname, "public")));

// for request to /api route them through the api express instance
app.use('/api/v1', require('./api/v1'));
// for all other requests, route to the main express instance
app.use('/', require('./app'))

// all routes not captured by the router are served a basic 404
app.get('*', function(req, res) {
    res.send('This page doesn\'t exist');
});

app.listen(process.env.PORT, function (err) {
    console.log("rocking and rolling on port " + process.env.PORT)
});