// sample angular code
var app = angular.module('myApp',
    [
        'ngRoute',
        'membersDirective',
        'footerDirective',
        'ui.bootstrap'
        //'ngAnimate'
    ]);

app.controller('MainCtrl', ['$scope', function($scope) {
  $scope.greeting = "Hello World!";
}]);
