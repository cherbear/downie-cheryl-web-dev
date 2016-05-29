(function(){
    angular
        .module("WebAppMaker")
        .controller("RegisterController", RegisterController);

    function RegisterController($location, UserService) {

        var vm = this;

        vm.register = register;

        function register (username, password, verifyPassword) {
            if (username === UserService.findUserByUsername(username)) {
                vm.error = "Username already taken";
            } else if (password != verifyPassword) {
                vm.error = "Passwords did not match";
            } else {
                UserService.createUser(username);
                $location.url("/user/" + id);
            }
        }
    }
})();