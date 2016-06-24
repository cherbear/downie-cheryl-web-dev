(function(){
    angular
        .module("WebAppMaker")
        .controller("ProfileController", ProfileController);

    function ProfileController($routeParams, UserService) {
        var vm = this;
        vm.updateUser = updateUser;
        vm.userId = $routeParams.uid;

        function init() {
            vm.user = UserService.findUserById(vm.userId);
        }
        init();

        function updateUser() {
            var result = UserService.updateUser(vm.userId, vm.user);
            if(result === true) {
                vm.success = "User successfully updated";
            } else {
                vm.error = "User not found";
            }
        }
    }
})();