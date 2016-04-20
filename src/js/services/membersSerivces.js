app.service('getMembersService',['$http', function($http){
    return {
        getallMembers: function () {
            return $http({
                method: 'GET',
                url: 'https://galvanize-student-apis.herokuapp.com/gdating/members/'
            })
                .then(function (results) {
                    console.log('some members',results);
                    return results;
                });
        }

        }; // end of return statement

}]); //end of service
