(function(){
    angular
        .module("WebAppMaker")
        .controller("EditWebsiteController", EditWebsiteController);

    function EditWebsiteController($routeParams, WebsiteService) {
        var vm = this;
        vm.developerId = $routeParams.developerId;
        vm.websiteId = $routeParams.websiteId;
        vm.name = $routeParams.name;
        
        vm.deleteWebsite = deleteWebsite;
        vm.updateWebsite = updateWebsite;

        var id = $routeParams["id"];
        
        function init() {
            WebsiteService
                .findWebsiteById(id)
                .then(function(response) {
                    vm.website = response.data;
                });
        }
        init();

        function updateWebsite() {
            WebsiteService
                .updateWebsite(id, vm.website)
                .then(
                    function(response) {
                        vm.success = "Website successfully updated";
                    },
                    function(error) {
                        vm.error = error.data;
                    }
                )
        }

        function deleteWebsite () {
            WebsiteService
                .deleteWebsite(id, vm.website)
                .then(
                    function(response) {
                        vm.success = "Website successfully deleted";
                    },
                    function(error) {
                        vm.error = error.data;
                    }
                )
        }
    }
})();