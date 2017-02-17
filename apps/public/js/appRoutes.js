angular.module('NerdRoutes', ['$urlProvider', '$locationProvider'])
    .config('Routes', function($urlProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            }),
            .when('/nerds', {
                templateUrl: 'views/nerds.html',
                controller: 'NerdsCtrl'
            })
        $locationProvider.html5Mode(true);
    })
