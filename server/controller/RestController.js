var path = require('path');
var appDir = path.dirname(require.main.filename);
var logger = require(appDir + '/server/logger/logger');
var movieModel = require(appDir+'/views/core/navbar/navbarCatmodel.js')

module.exports = {

categories: function (request,response,next) {

    movieModel.find({}, function(err, users) {
        if (err) throw err;

        // object of all the users
       // console.log(users);
        response.json(users);
    });



}




}