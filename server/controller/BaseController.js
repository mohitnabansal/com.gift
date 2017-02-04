var path = require('path');
var appDir = path.dirname(require.main.filename);
var logger = require(appDir + '/server/logger/logger');
var mongoose = require('mongoose');
var User = mongoose.model('USER');
var modelUser = new User();
var passport = require('../authentication/config/passport');
module.exports = {

    home: function (request,response,next) {

        /*if(!request.isAuthenticated()) {
            console.log(request.session);
            return   response.redirect("/login") }*/
        response.sendFile(appDir + "/views/core/index.html")
    },

   login: function(request,response,next){
      // response.json({ login: 'log' });
       if(request.user && request.isAuthenticated()){
           response.redirect("/home");
       }
       response.sendFile(appDir+"/views/core/login/login.html")
       },
    loginPost: function(request,response,next){
       console.log(request.user)
       if(!request.user)
       {
           response.redirect("/login");
       }
        response.set({
            'Content-Type': 'text/html'
        });
        response.redirect("/home");
    },

    register: function(request,response,next){

        var car = new User(request.body);
      console.log(car)
    }


};

