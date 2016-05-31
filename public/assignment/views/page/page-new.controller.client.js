(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($location, PageService) {

        var vm = this;
        vm.pageId = $routeParams.pageId;
        vm.name = $routeParams.name;
        vm.websiteId = $routeParams.websiteId;

        function init() {
            vm.page = PageService.findPageById(vm.pageId);
        }
        init();


        function create() {
            vm.page = PageService.createPage(vm.websiteId, vm.page);
        }
    }
})();