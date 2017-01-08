var express = require('express'),
    router = express.Router(),
    path = require("path");
var logger = require('./../logger/logger');
var baseController = require("./../controller/BaseController");
var restController = require("./../controller/RestController");
var absPath = path.join(__dirname, "../../views/");
logger.log(absPath);
// route to handle home page
router.get('/',baseController.home);
router.get('/categories',restController.categories);

module.exports = router;