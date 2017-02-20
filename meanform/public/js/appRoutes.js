angular.module('formRoutes', ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

        $stateProvider

        .state('form', {
            url: '/form',
            templateUrl: 'views/form.html',
            controller: 'formController'
        })

        .state('form.profile', {
            url: '/profile',
            templateUrl: 'views/form-profile.html'
        })

        .state('form.interests', {
            url: '/interests',
            templateUrl: 'views/form-interests.html'
        })

        .state('form.payment', {
            url: '/payment',
            templateUrl: 'views/form-payment.html'
        });

        $urlRouterProvider.otherwise('/form/profile');
    })
