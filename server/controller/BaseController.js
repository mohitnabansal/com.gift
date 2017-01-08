var path = require('path');
var appDir = path.dirname(require.main.filename);
var logger = require(appDir + '/server/logger/logger');

module.exports = {

    home: function (request,response,next) {
        response.sendFile(appDir+"/views/core/index.html");

    }
}