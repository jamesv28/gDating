app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'RegisterCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'
        })
        .when('/members', {
            templateUrl: 'views/members.html',
            controller: 'membersCtrl'
        })
        .when('/userProfile', {
            templateUrl: 'views/userProfile.html',
            controller: 'profileCtrl'
        })
        .when('/search', {
            templateUrl: 'views/search.html',
            controller: 'searchCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });