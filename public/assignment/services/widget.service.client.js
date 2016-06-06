(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService($http) {

        var api = {
            createWidget: createWidget,
            findAllWidgetsForPage: findAllWidgetsForPage,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget,
            uploadImage: uploadImage
        };
        return api;

        function createWidget(pageId, widget) {
            var url = "/api/page/"+pageId+"/widget";
            var widget = {
                pageId: pageId,
                widgetType: widget.widgetType
            };
            return $http.post(url, widget);
        }
        function findAllWidgetsForPage(pageId) {
            var url = "/api/page/"+pageId+"/widget";
            return $http.get(url);

        }
        function findWidgetById(widgetId) {
            var url = "/api/widget/"+widgetId;
            return $http.get(url);
        }
        function updateWidget(widgetId, widget){
            var url = "/api/widget/"+widgetId;
            return $http.put(url, widget);
        }
        function deleteWidget(widgetId) {
            var url = "/api/widget/"+widgetId;
            return $http.delete(url);
        }
        function uploadImage(file) {

            var widgetId      = req.body.widgetId;
            var width         = req.body.width;
            var myFile        = req.file;

            var originalname  = myFile.originalname; // file name on user's computer
            var filename      = myFile.filename;     // new file name in upload folder
            var path          = myFile.path;         // full path of uploaded file
            var destination   = myFile.destination;  // folder where file is saved to
            var size          = myFile.size;
            var mimetype      = myFile.mimetype;

            for(var i in widgets) {
                if(widgets[i]._id === widgetId) {
                    widgets[i].url = "/uploads/"+filename;
                }
            }

            res.redirect("/assignment/#/user/:uid/website/:wid/page/:pid/widget/:wgid");
        }
    }
})();

