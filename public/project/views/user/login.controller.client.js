(function(){
    angular
        .module("ServiceMeetUps")
        .controller("LoginController", LoginController);

    function LoginController($location, $rootScope, UserService) {

        var vm = this;

        vm.login = login;

        function login (username, password) {
            if (username === "administrator") {
                UserService
                    .login(username, password)
                    .then(
                        function(response) {
                            console.log(response);
                            var user = response.data;
                            if(user) {
                                $rootScope.currentUser = user;
                                $location.url("/admin/");
                            }
                        },
                        function (error) {
                            vm.error = "User not found";
                        }
                    );
            }
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