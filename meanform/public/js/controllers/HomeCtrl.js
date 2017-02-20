angular.module('HomeCtrl', [])
    .controller('HomeCtrl', function($scope) {
        $scope.formData = {};

        $scope.processForm = function() {
            alert('Awesome!');
        };
    })
