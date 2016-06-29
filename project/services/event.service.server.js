module.exports = function(app, models) {

    var eventModel = models.eventModel;

    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    function createPage(req, res) {
        var newPage = req.body;

        /*eventModel
            .createPage(newPage)
            .then(
                function(page) {
                    res.json(page);
                },
                function(error) {
                    res.status(400).send(error);
                }
            );*/
    }
    function findAllPagesForWebsite(req, res) {
        var pages = req.params['websiteId'];

        /*eventModel
            .findAllPagesForWebsite(pages)
            .then(
                function (response) {
                    res.send(response);
                },
                function () {
                    res.sendStatus(404);
                }
            );*/

    }
    function findPageById(req, res) {
        var pageId = req.params.pageId;

        /*eventModel
            .findPageById(pageId)
            .then(
                function(page){
                    res.send(page);
                },
                function(error){
                    res.status(400).send(error);
                }
            );*/
    }
    function updatePage(req, res) {
        var id = req.params.pageId;
        var newPage = req.body;

        /*eventModel
            .updatePage(id, newPage)
            .then(
                function(page) {
                    res.send(200);
                },
                function(error) {
                    res.status(404).send("Unable to update page with ID: " + id);
                }
            );*/
    }

    function deletePage(req, res) {
        var id = req.params.pageId;

        /*eventModel
            .deletePage(id)
            .then(
                function (status) {
                    res.send(200);
                },
                function (error) {
                    res.status(404).send("Unable to remove page with ID: " + id);
                }
            );*/
    }




}