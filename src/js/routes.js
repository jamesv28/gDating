app.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainCtrl'
        })
        .when('/register', {
            templateUrl: 'views/register.html',
            controller: 'registerCtrl'
        })
        .when('/login', {
            templateUrl: 'views/login.html',
            controller: 'loginCtrl'
        })
        .when('/profile', {
            templateUrl: 'views/profile.html',
            controller: 'profileCtrl'
        })
        .when('/members', {
            templateUrl: 'views/members.html',
            controller: 'membersCtrl'
        })
        .when('/logout', {
            templateUrl: 'views/logout.html',
            controller: 'logoutCtrl'
        })
        .when('/userProfile', {
            templateUrl: 'views/userProfile.html',
            controller: 'userProfileCtrl'
        })
        .when('/search', {
            templateUrl: 'views/search.html',
            controller: 'searchCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
    });