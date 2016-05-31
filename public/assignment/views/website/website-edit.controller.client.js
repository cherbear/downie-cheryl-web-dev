(function(){
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.userId;
        vm.websiteId = $routeParams.websiteId;

        function init() {
            vm.website = WebsiteService.findWebsiteById(vm.websiteId);
        }
        init();

        vm.deletePage = deletePage;

        function deleteWebsite () {
            var website = WebsiteService.deleteWebsite(vm.websiteId);
            $location.url("/user/:uid/website/");
        }
    }
})();