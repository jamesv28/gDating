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


/*
username: Raquel.Hayes53_Kris57@hotmail.com
password: JkVex3y5Gqc1WVKBVVYc
 */