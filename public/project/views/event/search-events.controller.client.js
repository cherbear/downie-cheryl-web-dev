(function(){
    angular
        .module("ServiceMeetUps")
        .controller("UserProfileController", UserProfileController);

    function UserProfileController($location, $rootScope, UserService) {

        var vm = this;

        vm.func = func;

        function func (params) {
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