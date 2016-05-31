(function(){
    angular
        .module("WebAppMaker")
        .controller("PageEditController", PageEditController);

    function PageEditController($location, PageService) {

        var vm = this;

        vm.deletePage = deletePage;

        function deletePage (pageId) {
            var page = PageService.deletePage(pageId);
            $location.url("/user/:uid/website/:wid/page");
        }
    }
})();