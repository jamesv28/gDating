angular.module('userProfileDirective',[])
    .directive('usersInfo',['$rootScope','authService', '$scope',
            function($rootScope, authService) {
        return {
            restrict: 'E',
            scope: {
                member: '='
            },
            transclude: true,
            templateUrl: 'views/directives/userProfile.html',
            controller: function($scope) {
                $rootScope.currentUser = authService.getUserInfo();

                console.log('i am a user',$rootScope.currentUser);

                //try to fix issue with currentUser
                scope.user = JSON.parse( $rootScope.currentUser);
                console.log('brought to the local level', scope.user);
            }
        }
    }]); //end of service