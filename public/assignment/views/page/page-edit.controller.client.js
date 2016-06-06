(function(){
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($routeParams, PageService) {

        var vm = this;
        vm.pageId = $routeParams.pageId;
        vm.name = $routeParams.name;
        vm.websiteId = $routeParams.websiteId;

        var id = $routeParams["id"];

            function init() {
                PageService
                    .findPageById(id)
                    .then(function(response) {
                        vm.page = response.data;
                    });
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