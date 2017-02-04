var express = require('express'),
    router = express.Router(),
    path = require("path");
var passport = require('passport');
var logger = require('./../logger/logger');
var baseController = require("./../controller/BaseController");
var restController = require("./../controller/RestController");
var absPath = path.join(__dirname, "../../views/");
logger.log(absPath);
// route to handle home page
router.get('/home',baseController.home);
router.get('/login',baseController.login);
router.post('/login',passport.authenticate('local-login'),baseController.loginPost);
router.post('/login',passport.authenticate('local-login',{failureRedirect: '/login', failureFlash: true }),baseController.loginPost);
router.post('/register',baseController.register);
//router.get('/categories',restController.categories);

module.exports = router;