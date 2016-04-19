// sample angular code
var app = angular.module('myApp',
    [
        'ngRoute'
        //'ngAnimate'
    ]);

app.controller('myController', ['$scope', function($scope) {
  $scope.greeting = "Hello World!";
}]);
