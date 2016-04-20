app.controller('membersCtrl', ['$scope', 'getMembersService', 'manipulateMembersService',
    function($scope, getMembersService, manipulateMembersService) {

        // get a loading gif before resources are loaded
        var vm = this;
        vm.loadingData = false;
    getMembersService.getallMembers()
        .then(function(data){
            $scope.members = data.data.data;
        });

        //manipulateMembersService.getIndAge()
        //    .then(function(data) {
        //       console.log(data);
        //    });



}]);
