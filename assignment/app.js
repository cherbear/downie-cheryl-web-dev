module.exports = function(app) {

    var userService = require("./services/user.service.server.js")(app);
    var widgetService = require("./services/widget.service.server.js")(app);
    

};