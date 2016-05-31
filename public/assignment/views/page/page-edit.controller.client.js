(function(){
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, PageService) {

        var vm = this;
        vm.pageId = $routeParams.pageId;
        vm.name = $routeParams.name;
        vm.websiteId = $routeParams.websiteId;

            function init() {
                vm.page = PageService.findPageById(vm.pageId);
            }
            init();

        function updatePage(page) {
            PageService.updatePage(vm.pageId, vm.name, vm.websiteId);
        }

        function deletePage (pageId) {
            PageService.deletePage(vm.pageId);
        }
    }
})();