(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService() {

        var widgets = [
                { "_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
                { "_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                    "url": "http://lorempixel.com/400/200/"},
                { "_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
                { "_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                { "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                    "url": "https://youtu.be/AM2Ivdi9c4E" },
                { "_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
            ]
            ;

        var api = {
            createWidget: createWidget,
            findWidgetsByPageId: findWidgetsByPageId,
            findWidgetById: findWidgetById,
            updateWidget: updateWidget,
            deleteWidget: deleteWidget
        };
        return api;

        function updateWidget(widgetId, widget) {
            for(var i in widgets) {
                if(widgets[i]._id === id) {
                    widgets[i].name = newWidget.name;
                    return true;
                }
            }
            return false;
        }
        function createWidget(pageId, widget) {}
        function deleteWidget(widgetId) {}
        function findWidgetById(widgetId) {
            for(var i in widgets) {
                if(widgets[i]._id === id) {
                    return widgets[i];
                }
            }
            return null;
        }
        function findWidgetByPageId(pageId) {
            for(var i in widgets) {
                if(widgets[i].pageId === pageId) {
                    return widgets[i];
                }
            }
            return null;
        }

    }
})();