(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetChooseController", WidgetChooseController);

    function WidgetChooseController($routeParams, WidgetService) {
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