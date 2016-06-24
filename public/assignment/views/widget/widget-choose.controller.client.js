(function(){
    angular
        .module("WebAppMaker")
        .controller("WidgetChooseController", WidgetChooseController);

    function WidgetChooseController($routeParams, $location, WidgetService) {
        var vm = this;
        vm.widgetId = $routeParams.wgid;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;
        vm.pageId = $routeParams.pid;

        
        

        vm.create = create;

        function init() {
            vm.widgets = WidgetService.findWidgetById(vm.widgetId);
        }
        init();

        function create(widget) {
            vm.newWidget = {"_id": (new Date).getTime(), "widgetType": widget, "pageId": vm.pageId};
            var result = WidgetService.createWidget(vm.newWidget);
            if(result === true) {
                $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/" + vm.pageId + "/widget/" + vm.newWidget._id);
            } else {
                vm.error = "User not found";
            }
            
        }

    }
})();