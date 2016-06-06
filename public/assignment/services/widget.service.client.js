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
            var url = "/api/upload";
            return $http.post(url, file);
        }
    }
})();

