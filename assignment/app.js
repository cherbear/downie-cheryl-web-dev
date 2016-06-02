module.exports = function(app) {
    require("services/user.service.server.js")(app);
    require("services/website.service.server.js")(app);
    require("services/page.service.server.js")(app);
    require("services/widget.service.server.js")(app);
};

/* Below is what we monkeyed with in class


module.exports = function(app) {
    app.get("/say/:message", function(req, res) {  //req = request, res = response
        var msg = req.params["message"];
        res.send("This is a message: " + msg);
    });
};

    */