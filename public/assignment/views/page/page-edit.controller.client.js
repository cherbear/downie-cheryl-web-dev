(function(){
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, $location, PageService) {

        var vm = this;
        vm.pageId = $routeParams.pid;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;

        vm.updatePage = updatePage;
        vm.deletePage = deletePage;

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
            PageService.deletePage(pageId);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId);
        }
    }
})();