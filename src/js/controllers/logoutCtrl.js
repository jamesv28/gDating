//app.controller('logoutCtrl', ['$scope', '$rootScope', 'authService',
//    function($scope, $rootScope, authService) {
//
//        $scope.logout = function() {
//            authService.logout();
//        }
//
//    }]);

(function() {
    'use strict';

    angular.module('myApp')
        .controller('logoutCtrl', logoutCtrl);

    function logoutCtrl($scope , authService) {
        $scope.logout = function() {
            authService.logout();
        }
    }
})(); //end of controller