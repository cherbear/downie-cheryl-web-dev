(function(){
    angular
        .module("ServiceMeetUps")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, $rootScope, UserService) {

        var vm = this;

        vm.register = register;

        function register (username, password) {
            /*UserService
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
                );*/
        }
    }
})();