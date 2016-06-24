(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($routeParams, PageService) {

        var vm = this;
        vm.pageId = $routeParams.pid;
        vm.websiteId = $routeParams.wid;
        vm.userId = $routeParams.uid;

        function init() {
            var pageId = $routeParams.pageId;
            vm.pages = PageService.findPageByWebsiteId(vm.websiteId);
        }
        init();

    }
})();