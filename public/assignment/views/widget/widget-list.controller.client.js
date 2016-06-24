(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetListController", WidgetListController);

    function WidgetListController($routeParams, WidgetService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;
        vm.widgetId = $routeParams.wgid;

        function init() {
            vm.widgets = WidgetService.findWidgetById(vm.widgetId);
        }
        init();

        function create(widget) {
            vm.widgets = WidgetService.createWidget(vm.pageId, widget);

        }
    }
})();