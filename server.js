//============IMPORTING MODULES===============//
/*
* CORE MODULES.
* */
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

/*
 * DB Configuration
 *
 * */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/giftzs');
/*EXTERNALLY MAINTAINED MODULES*/
//var modelSave = require('./views/core/navbar/navbarCatmodel');
var logger = require('./server/logger/logger');
var mainroute = require('./server/routes/mainroute');




logger.mongoLog.info("asd");
var app = express();

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// setting static files location './app' for angular app html and js
app.use(express.static(path.join(__dirname, 'app')));
// setting static files location './node_modules' for libs like angular, bootstrap
app.use('/node_modules',express.static('node_modules'));
app.use('/bower_components',express.static('bower_components'));
app.use('/views',express.static('views'));
app.use('/',mainroute);
// setting port number for running server
var port = process.env.port || 3000;

// starting express server
app.listen(port, function() {
    console.log("Server is running at : http://localhost: %d" , port );
});