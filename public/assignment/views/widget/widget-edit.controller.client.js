(function(){
    angular
        .module("WebAppMaker")
        .controller("EditWidgetController", EditWidgetController);

    function EditWidgetController($routeParams, $location, WidgetService) {
        var vm = this;
        vm.widgetId = $routeParams.wgid;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;

        vm.updateWidget = updateWidget;
        vm.deleteWidget = deleteWidget;

        function init() {
            vm.widget = WidgetService.findWidgetById(vm.widgetId);
        }
        init();

        function updateWidget(widget) {
            var result = WidgetService.updateWidget(vm.widgetId, widget);
            if(result === true) {
                vm.success = "Widget successfully updated";
            } else {
                vm.error = "Widget not found";
            }

        }

        function deleteWidget() {
            WidgetService.deleteWidget(vm.widgetId);
            $location.url("/user/"+ vm.userId +"/website/" + vm.websiteId + "/page/" + vm.pageId);
        }
    }
})();