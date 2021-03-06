module.exports = function() {

    var mongoose = require('mongoose');

    var connectionString = 'mongodb://127.0.0.1:27017/webdev';

    if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
        connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
            process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
            process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
            process.env.OPENSHIFT_APP_NAME;
    }

    var mongoose = require("mongoose");
    mongoose.connect(connectionString);


    var userModel = require("./user/user.model.server.js")();
    //var eventModel = require("./event/event.model.server.js")();


    var models = {
        userModel: userModel
        //eventModel: eventModel
    };

    return models;
};