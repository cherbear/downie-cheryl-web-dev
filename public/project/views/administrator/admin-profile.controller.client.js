(function(){
    angular
        .module("ServiceMeetUps")
        .controller("AdminProfileController", AdminProfileController);

    function AdminProfileController($location, $rootScope, UserService) {

        var vm = this;

        vm.login = login;

        function login (username, password) {
            UserService
                .login(username, password)
                .then(
                    function(response) {
                        console.log(response);
                        var user = response.data;
                        if(user) {
                            $rootScope.currentUser = user;
                            var id = user._id;
                            $location.url("/user/" + id);
                        }
                    },
                    function (error) {
                        vm.error = "User not found";
                    }
                );
        }
    }
})();