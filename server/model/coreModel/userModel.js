var crypto = require('crypto');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    emailid: {
        type: Schema.Types.Mixed,
        unique: true,
        required: true
    },
    yourname: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    phone_number:{
        type: Number,
        required: true

    },
    address_list: {
        address: {type: String }
    },
 //   password: String,
    salt: String,
    hash:String,
    createdon:{
        type : Date,
        default : Date.now
    },
    last_accessed:[Date]
});
user.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
};


user.post('find',function(next){
    var current_Date = new Date();
    this.last_accessed.push(current_Date);
    if (!this.created_on)
        this.created_on = current_Date;
    next();
});

user.methods.validPassword = function(password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return this.hash === hash;
};

/*var USER =  mongoose.model('USER',user);
var userSave = new USER;
    userSave.email = 'mohitnbansal@gmail.com',
    userSave.name = 'Mohit',
    userSave.password ='Chemistry',
    userSave.setPassword(userSave.password)


userSave.save(function(err){
if(err) {
    console.log("This is the Error");
    return handleError(err)
};


})*/
module.exports = mongoose.model('USER',user);