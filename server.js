//============IMPORTING MODULES===============//
/*
* CORE MODULES.
* */
var express = require('express');
var redis   = require("redis");
var bodyParser = require('body-parser');
var path = require('path');
var cookieParser =require('cookie-parser');
var methodOverride = require('method-override');
var session = require('express-session');
var redisStore = require('connect-redis')(session);
var client  = redis.createClient();
var passport = require('passport');
var flash = require('connect-flash');;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

/*
 * DB Configuration
 *
 * */
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/giftzs');
/*EXTERNALLY MAINTAINED MODULES*/
//var modelSave = require('./views/core/navbar/navbarCatmodel');
require('./server/model/coreModel/userModel');
require('./server/authentication/config/passport');

var logger = require('./server/logger/logger');
var mainroute = require('./server/routes/mainroute');




logger.mongoLog.info("asd");
var app = express();

// parse application/json
app.use(bodyParser.json());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({secret:'supernova',
    cookie:{_expires : 600000000},
    store: new redisStore({ host: 'localhost', port: 6379, client: client,ttl :  260}),
    saveUninitialized:true ,
    resave: true
    }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// setting static files location './app' for angular app html and js
app.use(express.static(path.join(__dirname, 'app')));
// setting static files location './node_modules' for libs like angular, bootstrap
app.use('/node_modules',express.static('node_modules'));
app.use('/bower_components',express.static('bower_components'));
app.use('/views',express.static('views'));
app.use('/',mainroute);
// setting port number for running server
var port = process.env.port || 3000;

// starting express
app.listen(port, function() {
    console.log("Server is running at : http://localhost: %d" , port );
});