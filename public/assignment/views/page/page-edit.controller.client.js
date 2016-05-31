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

        vm.deletePage = deletePage;

        function deletePage (pageId) {
            var page = PageService.deletePage(pageId);
            $location.url("/user/:uid/website/:wid/page");
        }
    }
})();