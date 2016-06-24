(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetChooseController", WidgetChooseController);

    function WidgetChooseController($routeParams, WidgetService) {
        var vm = this;
        vm.widgetId = $routeParams.wgid;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;

        vm.createWidget = createWidget;

        function init() {
            vm.widgets = WidgetService.findWidgetById(vm.widgetId);
        }
        init();

        function create(widget) {
            
            vm.widget = WidgetService.createWidget(vm.pageId, widget);
        }

        function createWidget(widgetType) {
            var newWidget = {
                _id: (new Date()).getTime(),
                widgetType: widgetType
            };
            widgets.push(newWidget);
        }
    }
})();