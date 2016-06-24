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
                newUser = {"_id": new Date().getMilliseconds(), "username": username, "password": password, "firstName": "", "lastName": ""};
                UserService.createUser(newUser);
                $location.url("/user/" + newUser._id);
            }
        }
    }
})();