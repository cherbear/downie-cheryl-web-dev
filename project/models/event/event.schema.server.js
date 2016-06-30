module.exports = function() {
    var mongoose = require("mongoose");

    var EventSchema = mongoose.Schema({
        name: String,
        description: String,
        dateCreated: {type: Date, default: Date.now},
        dateOfEvent: {type: Date},
        usersAttending: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}],
        address: String,
        contactEmail: String,
        contactPhone: String,
        needHelp: Boolean
    }, {collection: "project.user"});

    return EventSchema
};