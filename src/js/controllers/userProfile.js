app.controller('userProfileCtrl', ['$scope', '$rootScope', 'authService',
    function($scope, $rootScope, authService) {



        $rootScope.currentUser = authService.getUserInfo();
        //try to fix issue with currentUser
        $scope.user = JSON.parse( $rootScope.currentUser);
        console.log('brought to the local level', $scope.user);

    }]);
