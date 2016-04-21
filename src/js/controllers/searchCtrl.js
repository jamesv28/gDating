/** Search controller to search through the page ***/

app.controller('searchCtrl', ['$scope', 'getMembersService',
    function($scope, getMembersService) {


        $scope.loading = true;
        getMembersService.getallMembers()
            .then(function(data) {
                $scope.members = data.data.data;
                console.log('members length', $scope.members.length);
                $scope.viewby = 6;
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

}]);
