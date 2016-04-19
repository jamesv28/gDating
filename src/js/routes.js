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
            controller: 'LoginCtrl'
        })
        .when('/members', {
            templateUrl: 'members.html',
            controller: 'membersCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });