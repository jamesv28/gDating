app.controller('membersCtrl', ['$scope', 'getMembersService', function($scope, getMembersService) {

    getMembersService.getallMembers()
        .then(function(data){
            $scope.members = data.data.data;
            console.log('members', $scope.members);
        });



}]);
