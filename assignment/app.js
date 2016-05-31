module.exports = function(app) {
    app.get("/say/:message", function(req, res) {  //req = request, res = response
        var msg = req.params["message"];
        res.send("This is a message: " + msg);
    });
};