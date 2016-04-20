app.controller('membersCtrl', ['$scope', 'getMembersService', 'manipulateMembersService',
    function($scope, getMembersService, manipulateMembersService) {

    getMembersService.getallMembers()
        .then(function(data){
            $scope.members = data.data.data;
        });

        //manipulateMembersService.getIndAge()
        //    .then(function(data) {
        //       console.log(data);
        //    });



}]);
