var crypto = require('crypto');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var user = new Schema({
    emailid: {
        type: String,
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
    username:{
        type:String,
        required:true
    },
    dateofbirth:{
        type:String,
        required:true
    },
    age:{
        type: Number,

    },
    phone_number:{
        type: Number,

    },
    address_list: {
        address: {type: String }
    },
  password:{
        type:String,
        },

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

user.pre('save',function(next){
    var todaysDate = new Date();
    console.log(todaysDate);
    console.log(this.dateofbirth);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    var dobString = this.dateofbirth;
    var dob = new Date(dobString.toString());
    console.log(dob);
    var age = todaysDate - dob;
    console.log(age);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    this.age = age;
    this.setPassword(this.password);;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    this.password = "";
    next();
});;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

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
 { yourname: 'a',
 surname: 'a',
 dateofbirth: '"2017-02-19T18:30:00.000Z"',
 emailid: 'a',
 username: 'a',
 otherModelValue: 'a',
 password: 'a' }



userSave.save(function(err){
if(err) {
    console.log("This is the Error");
    return handleError(err)
};


})*/
module.exports = mongoose.model('USER',user);