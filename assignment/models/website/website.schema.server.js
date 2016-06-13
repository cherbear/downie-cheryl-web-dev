var mongoose = require("mongoose");

module.exports = function() {

    var WebsiteSchema = mongoose.Schema({
        _user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        name : String,
        description : String,
        pages: [],
        dateCreated : {type : Date, default: Date.now}
    }, {collection: "assignment.website"});

    return WebsiteSchema;
};