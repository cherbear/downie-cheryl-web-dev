module.exports = function (app, models) {
    var multer = require('multer');
    var upload = multer({ dest: __dirname+'/../../public/uploads' });

    var widgetModel = models.widgetModel;

    app.post ("/api/upload", upload.single('myFile'), uploadImage);
    app.post ("/api/new/upload", upload.single('myFile'), uploadNewImage);
    app.post ("/api/page/:pageId/widget", createWidget);
    app.get ("/api/page/:pageId/widget", findAllWidgetsForPage);
    app.get ("/api/widget/:widgetId", findWidgetById);
    app.delete("/api/widget/:widgetId", deleteWidget);
    app.put("/api/widget/:widgetId", updateWidget);
    app.put("/api/widget_reorder", reorderWidget);


    function createWidget(req, res) {
        /*var newWidget = req.body;

        newWidget._id = (new Date()).getTime() + "";
        widgets.push(newWidget);
        res.json(newWidget);*/
    }
    function deleteWidget(req, res) {
        /*var id = req.params.widgetId;
        for(var i in widgets) {
            if(widgets[i]._id === id) {
                widgets.splice(i, 1);
                res.send(200);
                return;
            }
        }
        res.status(404).send("Unable to remove widget with ID: " + id);*/
    }
    function updateWidget(req, res) {
        /*var id = req.params.widgetId;
        var newWidget = req.body;
        for(var i in widgets) {
            if(widgets[i]._id === id && widgets[i].widgetType === "HEADER") {
                widgets[i].size = newWidget.size;
                widgets[i].text = newWidget.text;
                res.send(200);
                return;
            } else if(widgets[i]._id === id && widgets[i].widgetType === "IMAGE") {
                widgets[i].width = newWidget.width;
                widgets[i].url = newWidget.url;
                res.send(200);
                return;
            } else if (widgets[i]._id === id && widgets[i].widgetType === "HTML") {
                widgets[i].text = newWidget.text;
                res.send(200);
                return;
            } else if (widgets[i]._id === id && widgets[i].widgetType === "YOUTUBE") {
                widgets[i].width = newWidget.width;
                widgets[i].url = newWidget.url;
                res.send(200);
                return;
            }

        res.status(400).send("Widget with ID: "+ id +" not found");
        }*/
    }
    function findAllWidgetsForPage(req, res) {
        /*var widgets = req.params['pageId'];
        for(var i in widgets) {
            if(widgets[i].pageId === pageId) {
                res.send(widgets[i]);
            }
        }
        res.send(widgets);*/
    }
    function findWidgetById(req, res) {
        /*var widgetId = req.params.widgetId;
        for(var i in widgets) {
            if(widgets[i]._id === widgetId) {
                res.json(widgets[i]);
                return;
            }
        }
        res.status(404).send("Widget not found");*/
    }

    function uploadImage(req, res) {

    }

    function uploadNewImage(req, res) {

    }


    function reorderWidget(req, res) {

    }
}