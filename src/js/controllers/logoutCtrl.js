app.controller('logoutCtrl', ['$scope', '$rootScope', 'authService',
    function($scope, $rootScope, authService) {

        $scope.logout = authService.logout();

    }]);