angular.module('membersDirective',[])
    .directive('membersInfo', function() {
        return {
            restrict: 'E',
            scope: {
                member: '='
            },
            transclude: true,
            templateUrl: 'views/directives/indMember.html',
            controller: function($scope) {
                //console.log('controller',$scope.member);
            }
        };
    });
//TODO: style the directive and get the directive to allow other html elements