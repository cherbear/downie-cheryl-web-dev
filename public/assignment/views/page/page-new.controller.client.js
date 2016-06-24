(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, $location, PageService) {

        var vm = this;
        vm.pageId = $routeParams.pid;
        vm.websiteId = $routeParams.wid;
        vm.userId = $routeParams.uid;

        vm.create = create;

        function init() {
            vm.page = PageService.findPageById(vm.pageId);
        }
        init();


        function create(pageName) {
            vm.page = {"_id": (new Date).getTime(), "name": pageName, "websiteId": vm.websiteId};
            var result = PageService.createPage(vm.page);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page/");
        }
    }
})();