var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//var twitterStrategy =  require('passport-twitter');
//var googleStrategy = require('passport-google');
//var facebookStrategy =require('passport-facebook');
var mongoose = require('mongoose');
var User = mongoose.model('USER');

passport.use('local-login',new LocalStrategy({
        usernameField: 'email'
    },
    function(username, password, done) {
    process.nextTick(function(){
        User.findOne({ email: username }, function (err, user) {
            if (err) {  return done(null,false,{
                message:'New User'
            }); }
            // Return if user not found in database
            if (!user) {
                return done(null, false, {
                 //   console.log("IN Valid")
                    message: 'User not found'
                });
            }
            // Return if password is wrong
            if (!user.validPassword(password)) {

                return done(null, false, {
                    message: 'Password is wrong'
                });
            }
            // If credentials are correct, return the user object
            return done(null, user);
        });
    });
    }
));
passport.serializeUser(function(User, done) {
    done(null, User.id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});