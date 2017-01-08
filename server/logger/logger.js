/*
 *
 * Logger Modules
 *
 * */
var winston = require('winston');

require('winston-mongodb').MongoDB;




module.exports = {

   log:console.log.bind( console ),

   mongoLog: winston.loggers.add('mongoLog', {
    transports: [
        new (winston.transports.MongoDB)({
            db: 'mongodb://localhost/giftzs',
            collection: 'collection1',
            level: 'info',
            capped: true
        }),
    ]
}),

profileLog: winston.loggers.add('profileLog', {
    transports: [
        new (winston.transports.MongoDB)({
            db: 'mongodb://localhost/giftzs',
            collection: 'collection2',
            level: 'debug',
            capped: true
        }),
    ]
})

};