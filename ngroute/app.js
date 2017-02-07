var app = angular.module('scotchapp', ['ngRoute']);

app.config(function($routeProvider) {
    $routeProvider
    // route for the home page
    .when('/', {
        templateUrl: 'home.html',
        controller: 'MainCtrl'
    })

    // route for the about page
    .when('/about', {
        templateUrl: 'about.html',
        controller: 'AboutCtrl'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl: 'contact.html',
        controller: 'ContactCtrl'
    });
});

app.controller('MainCtrl', function($scope) {
    $scope.message = 'you can all see this cant you';
});

app.controller('AboutCtrl', function($scope) {
    $scope.message = 'youre at the about page aint ya';
});

app.controller('ContactCtrl', function($scope) {
    $scope.message = 'you can contact me at this page you asshole';
});
