(function(){
    angular
        .module("WebAppMaker")
        .controller("EditWidgetController", EditWidgetController);

    function EditWidgetController($routeParams, WidgetService) {
        var vm = this;
        vm.widgetId = $routeParams.widgetId;
        vm.widgetType = $routeParams.widgetType;

        function init() {
            vm.widget = WidgetService.findWidgetById(vm.widgetId);
        }
        init();

        function updateWebsite(website) {
            WidgetService.updateWidget(vm.websiteId, website);
        }

        function deleteWebsite () {
            WidgetService.deleteWidget(vm.websiteId);
            $location.url("/user/:uid/website/");
        }
    }
})();