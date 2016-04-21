angular.module('userProfileDirective',[])
    .directive('usersInfo', function() {
        return {
            restrict: 'E',
            scope: {
                member: '='
            },
            transclude: true,
            templateUrl: 'views/directives/userProfile.html',
            controller: function($scope) {
                console.log('currentUser', currentUser);
            }
        }
    }); //end of service