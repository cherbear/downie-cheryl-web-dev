module.exports = function() {
    var mongoose = require("mongoose");

    var UserSchema = mongoose.Schema({
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        facebook: {id: String, displayName: String},
        google: {id: String},
        email: String,
        phone: String,
        registeredEvents: [],
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "project.user"});

    return UserSchema
};