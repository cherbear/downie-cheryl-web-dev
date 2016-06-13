module.exports = function (app, models) {

    var websiteModel = models.websiteModel;

    app.post("/api/user/:userId/website", createWebsite);
    app.get("/api/user/:userId/website", findAllWebsitesForUser);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/website/:websiteId", updateWebsite);
    app.delete("/api/website/:websiteId", deleteWebsite);

    function createWebsite(req, res) {
        var newWebsite = req.body;
        
        websiteModel
            .createWebsite(newWebsite)
            .then(
                function(website) {
                    res.json(website);
                },
                function(error) {
                    res.status(400).send(error);
                }
            );
    }

    function findAllWebsitesForUser(req, res) {
        var userId = req.params.userId;

        websiteModel
            .findWebsitesByUser(userId)
            .then(
                function (website) {
                    res.send(website);
                },
                function (error) {
                    res.status(400).send(error);
                }
            );
    }

    function findWebsiteById(req, res) {
        var websiteId = req.params.websiteId;

        userModel
            .findWebsiteById(websiteId)
            .then(
                function(website){
                    res.send(website);
                },
                function(error){
                    res.status(400).send(error);
                }
            );
    }

    function updateWebsite(req, res) {
        var id = req.params.websiteId;
        var newWebsite = req.body;

        userModel
            .updateWebsite(id, newWebsite)
            .then(
                function(website) {
                    res.send(200);
                },
                function(error) {
                    res.status(404).send("Unable to update website with ID: " + id);
                }
            );
    }

    function deleteWebsite(req, res) {
        var id = req.params.websiteId;

        userModel
            .deleteWebsite(id)
            .then(
                function (status) {
                    res.send(200);
                },
                function (error) {
                    res.status(404).send("Unable to remove website with ID: " + id);
                }
            );
    }



}
