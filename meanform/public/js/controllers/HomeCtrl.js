angular.module('HomeCtrl', [])
    .controller('HomeCtrl', function() {
        $scope.formData = {};

        $scope.processForm = function() {
            alert('Awesome!');
        };
    })
console.log('home')
