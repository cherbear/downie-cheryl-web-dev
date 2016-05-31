(function(){
    angular
        .module("WebAppMaker")
        .controller("PageListController", PageListController);

    function PageListController($location, PageService) {

        var vm = this;
        vm.pageId = $routeParams.pageId;
        vm.name = $routeParams.name;
        vm.websiteId = $routeParams.websiteId;

        function init() {
            var pageId = $routeParams.pageId;
            vm.pages = PageService.findPageById(vm.pageId);
        }
        init();

    }
})();