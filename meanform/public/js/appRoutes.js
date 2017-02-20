angular.module('formRoutes', ['ui.router'])
    .config('Routes', function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('form', {
                url: '/form',
                templateUrl: 'views/form.html'
            })

        .state('form.profile', {
            url: '/profile',
            templateUrl: 'views/form-profile.html'
        })

        .state('form.interests', {
            url: 'interests',
            templateUrl: 'views/form-interests.html'
        })

        .state('form.payment', {
            url: 'payment',
            templateUrl: 'views/form-payment.html'
        });

        $locationProvider.otherwise('/form/profile');
    })
