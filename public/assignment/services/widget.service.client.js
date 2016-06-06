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
            deleteWidget: deleteWidget
        };
        return api;

        function createWidget(pageId, widget) {
            var url = "/api/widget";
            var widget = {
                pageId: pageId,
                widget: widget
            };
            return $http.post(url, widget);
        }
        function findAllWidgetsForPage(pageId) {

        }
        function findWidgetById(widgetId) {
            var url = "/api/widget/"+widgetId;
            return $http.get(url);
        }
        function updateWidget(widgetId, widget){

        }
        function deleteWidget(widgetId) {
            
        }
    }
})();

