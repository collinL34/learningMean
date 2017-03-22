angular.module('app', ['templates', 'ui.router', 'mgcrea.ngStrap'])
    .config(function($stateProvider, $urlRouterProvider, $locationProvider) {
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'angular/templates/main/index.html',
                controller: 'MainCtrl'
            })
            .state('/customers', {
                url: '/customers',
                templateUrl: 'angular/templates/customers/index.html',
                controller: 'CustomersController',
            })
            .state('/customer', {
                url: '/customers/:customerId',
                templateUrl: 'angular/templates/customers/show.html',
                controller: 'CustomerController'
            });
        $urlRouterProvider.otherwise('/');
    });
