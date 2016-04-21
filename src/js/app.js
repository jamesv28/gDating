// sample angular code
var app = angular.module('myApp',
    [
        'ngRoute',
        'membersDirective'
        //'ngAnimate'
    ]);

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.greeting = "Hello World!";
}]);
