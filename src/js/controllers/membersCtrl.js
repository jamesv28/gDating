app.controller('membersCtrl', ['$scope', 'getMembersService', 'manipulateMembersService',
    function($scope, getMembersService, manipulateMembersService) {

        // get a loading gif before resources are loaded
        var vm = this;
       $scope.loading = true;

        getMembersService.getallMembers()
            .then(function(data) {
                console.log('am i loaded', $scope.loading);
                $scope.members = data.data.data;
                //$scope.loading = false;
            }).finally(function() {
                $scope.loading= false;

            });
            //}).finally(function () {
            //   $scope.loading = false;
            //});

        //manipulateMembersService.getIndAge()
        //    .then(function(data) {
        //       console.log(data);
        //    });



}]);
