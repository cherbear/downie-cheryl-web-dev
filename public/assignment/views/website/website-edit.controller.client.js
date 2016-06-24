(function(){
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($routeParams, $location, WebsiteService) {
        var vm = this;
        vm.userId = $routeParams.uid;
        vm.websiteId = $routeParams.wid;

        vm.updateWebsite = updateWebsite;
        vm.deleteWebsite = deleteWebsite;

        function init() {
            vm.website = WebsiteService.findWebsiteById(vm.websiteId);
        }
        init();

        function updateWebsite() {
            var result = WebsiteService.updateWebsite(vm.websiteId, vm.website);
            if(result === true) {
                vm.success = "Website successfully updated";
                $location.url("/user/" + vm.userId + "/website/");
            } else {
                vm.error = "Website not found";
            }
        }

        function deleteWebsite () {
            WebsiteService.deleteWebsite(vm.websiteId);
            $location.url("/user/" + vm.userId + "/website/");
        }
    }
})();