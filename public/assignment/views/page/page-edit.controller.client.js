(function(){
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, PageService) {

        var vm = this;
        vm.pageId = $routeParams.pid;
        vm.websiteId = $routeParams.wid;

            function init() {
                vm.page = PageService.findPageById(vm.pageId);
            }
            init();

        function updatePage(page) {
            PageService.updatePage(vm.pageId, page);
            if(result === true) {
                vm.success = "Page successfully updated";
            } else {
                vm.error = "Page not found";
            }
        }

        function deletePage (pageId) {
            PageService.deletePage(vm.pageId);
        }
    }
})();