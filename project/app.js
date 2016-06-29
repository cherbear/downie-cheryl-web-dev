module.exports = function(app) {

    var models = require("./models/models.js")();

    var userService = require("./services/user.service.server.js")(app, models);
    var eventService = require("./services/event.service.server.js")(app, models);
};