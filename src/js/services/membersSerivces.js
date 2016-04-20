app.service('getMembersService',['$http', function($http){
    return $http({
        method: 'GET',
        url: 'https://galvanize-student-apis.herokuapp.com/gdating/members/'
    })
        .then(function (results) {
            console.log(results);
        });

}]); //end of service
