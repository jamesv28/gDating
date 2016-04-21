app.controller('membersCtrl', ['$scope', 'getMembersService', 'manipulateMembersService',
    function($scope, getMembersService, manipulateMembersService) {

        // get a loading gif before resources are loaded
        //var vm = this;
       $scope.loading = true;

        getMembersService.getallMembers()
            .then(function(data) {
                $scope.members = data.data.data;
                console.log('members length', $scope.members.length);
                $scope.viewby = 8;
                $scope.totalItems = $scope.members.length;
                $scope.currentPage = 4;
                $scope.itemsPerPage = $scope.viewby;
                $scope.maxSize = 5;
            }).finally(function() {
                $scope.loading= false;
            });

        console.log($scope.totalItems);


        $scope.pageChanged = function() {
            console.log('Page changed to: ' + $scope.currentPage);
        };

        $scope.setItemsPerPage = function(num) {
            $scope.itemsPerPage = num;
            $scope.currentPage = 1; //reset to first paghe
        };



        //manipulateMembersService.getIndAge()
        //    .then(function(data) {
        //       console.log(data);
        //    });



}]);
