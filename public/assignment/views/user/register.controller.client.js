(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {

        var vm = this;


        vm.register = register;

        function register (username, password, password2) {
            if (username === UserService.findUserByUsername(username)) {
                vm.error = "Username already taken";
            } else if (password != password2) {
                vm.error = "Passwords did not match";
            } else {
                vm.newUser = {"_id": (new Date).getTime(), "username": username, "password": password};

                var result = UserService.createUser(vm.newUser);
                if (result === true) {
                    $location.url("/user/" + vm.newUser._id);
                }

            }
        }
    }
})();