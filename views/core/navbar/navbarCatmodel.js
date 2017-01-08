var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categoriesList = new Schema({

    maincategoryName:String,
    subcategory1:[String],
    created_date:Date,
    updated_on:Date

});

categoriesList.pre('save',function (next) {
    var currentDate = new Date();
    this.updated_on = currentDate;
    if (!this.created_date)
        this.created_date = currentDate;

    next();
})

module.exports =  mongoose.model('CategoriesList', categoriesList);


