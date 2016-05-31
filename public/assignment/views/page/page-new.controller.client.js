(function(){
    angular
        .module("WebAppMaker")
        .controller("PageNewController", PageNewController);

    function PageNewController($location, PageService) {

        var vm = this;

        vm.updatePage = updatePage;

        function updatePage (pageId, page) {
            var page = PageService.updatePage(pageId, page);
            $location.url("/user/:uid/website/:wid/page/:pid");
        }
    }
})();