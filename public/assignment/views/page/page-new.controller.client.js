(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($routeParams, $location, PageService) {

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
            console.log(vm.websiteId);
            $location.url("/user/" + vm.userId + "/website/" + vm.websiteId + "/page");
        }
    }
})();