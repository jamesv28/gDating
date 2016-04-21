// sample angular code
var app = angular.module('myApp',
    [
        'ngRoute',
        'membersDirective',
        'ui.bootstrap'
        //'ngAnimate'
    ]);

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.greeting = "Hello World!";
}]);
