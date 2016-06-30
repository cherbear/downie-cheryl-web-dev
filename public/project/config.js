(function(){
    angular
        .module("ServiceMeetUps")
        .config(Config);

    function Config($routeProvider) {
        $routeProvider
            // user views
            .when("/login", {
                templateUrl: "views/user/login.view.client.html",
                controller: "LoginController",
                controllerAs: "model"
            })
            .when("/register", {
                templateUrl: "views/user/register.view.client.html",
                controller: "RegisterController",
                controllerAs: "model"
            })
            .when("/user/:userId", {
                templateUrl: "views/user/user-profile.view.client.html",
                controller: "UserProfileController",
                controllerAs: "model"
            })
            // administrator views
            .when("/admin/", {
                templateUrl: "views/administrator/admin-profile.view.client.html",
                controller: "AdminProfileController",
                controllerAs: "model"
            })
            // event views
            .when("/user/:userId/registeredEvents", {
                templateUrl: "views/event/event-list.view.client.html",
                controller: "EventListController",
                controllerAs: "model"
            })
            .when("/user/:userId/events", {
                templateUrl: "views/event/search-events.view.client.html",
                controller: "SearchEventsController",
                controllerAs: "model"
            })
            .when("/user/:userId/events/create", {
                templateUrl: "views/event/create-event.view.client.html",
                controller: "CreateEventController",
                controllerAs: "model"
            })
            .when("/user/:userId/events/:eventId", {
                templateUrl: "views/event/event-profile.view.client.html",
                controller: "EventProfileController",
                controllerAs: "model"
            })
            .when("/user/:userId/events/:eventId/edit", {
                templateUrl: "views/event/edit-event.view.client.html",
                controller: "EditEventController",
                controllerAs: "model"
            })
            .otherwise({
                redirectTo: "/login"
            });

        function checkLoggedin(UserService, $q, $location, $rootScope) {

            var deferred = $q.defer();

            UserService
                .checkLoggedin()
                .then(
                    function(response) {
                        var user = response.data;
                        console.log(user);
                        if(user == '0') {
                            deferred.reject();
                            $rootScope.currentUser = null;
                            $location.url("/login")
                        } else {
                            $rootScope.currentUser = user;
                            deferred.resolve();
                        }
                    },
                    function(err) {
                        console.log(err);
                        $rootScope.currentUser = null;
                        deferred.reject();
                    }
                );

            return deferred.promise;
        }

    }
})();