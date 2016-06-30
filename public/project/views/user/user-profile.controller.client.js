(function(){
    angular
        .module("ServiceMeetUps")
        .controller("UserProfileController", UserProfileController);

    function UserProfileController($location, $routeParams, $rootScope, UserService) {

        var vm = this;

        vm.updateUser = updateUser;
        vm.unregister = unregister;
        vm.logout     = logout;

        var id = $routeParams["id"];

        function init() {
            UserService
                .findUserById(id)
                .then(function(response) {
                    vm.user = response.data;
                });
        }
        init();

        function unregister() {
            UserService
                .deleteUser(id)
                .then(
                    function(response) {
                        $location.url("/login");
                    },
                    function(error) {
                        vm.error = error.data;
                    }
                );
        }

        function updateUser() {
            UserService
                .updateUser(id, vm.user)
                .then(
                    function(response) {
                        vm.success = "User successfully updated";
                    },
                    function(error) {
                        vm.error = error.data;
                    }
                )
        }

        function logout() {
            UserService
                .logout()
                .then(
                    function() {
                        $rootScope.currentUser = null;
                        $location.url("/login");
                    },
                    function() {
                        $rootScope.currentUser = null;
                        $location.url("/login");
                    }
                );
        }
    }
})();