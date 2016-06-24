(function(){
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($routeParams, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;


        function init() {
            vm.website = WebsiteService.findWebsiteById(vm.websiteId);
        }
        init();

        function updateWebsite(website) {
            var result = WebsiteService.updateWebsite(vm.websiteId, website);
            if(result === true) {
                vm.success = "Website successfully updated";
            } else {
                vm.error = "Website not found";
            }
        }

        function deleteWebsite () {
            WebsiteService.deleteWebsite(vm.websiteId);
            $location.url("/user/:uid/website/");
        }
    }
})();