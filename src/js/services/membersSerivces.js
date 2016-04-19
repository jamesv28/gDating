angular
    .module('myApp')
    .service('getMembers', getMembers);

function getMembers(data) {
    return$http({
        method: 'GET',
        url: 'https://galvanize-student-apis.herokuapp.com/gdating/members/'
    })
        .then(function (results) {
            console.log(results);
        });
}
