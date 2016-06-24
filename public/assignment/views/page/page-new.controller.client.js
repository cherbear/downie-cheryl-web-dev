(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($location, PageService) {

        var vm = this;
        vm.pageId = $routeParams.pid;
        vm.websiteId = $routeParams.wid;
        vm.userId = $routeParams.uid;


        function init() {
            vm.page = PageService.findPageById(vm.pageId);
        }
        init();


        function create(page) {
            vm.page = PageService.createPage(vm.websiteId, page);
        }
    }
})();