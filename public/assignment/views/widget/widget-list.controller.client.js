(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($routeParams, WebsiteService) {
        var vm = this;
        vm.widgetId = $routeParams.widgetId;
        vm.widgetType = $routeParams.widgetType;

        function init() {
            vm.widget = WidgetService.findWidgetById(vm.widgetId);
        }
        init();

        function create(widgetType) {
            vm.widget = WidgetService.createWidget(vm.pageId, vm.widget);
        }
    }
})();