angular.module('app')
    .controller('CustomersController', function($scope, Customer) {
        $scope.customers = [];

        function fetchCustomers() {
            return Customer.index().then(function(response) {
                $scope.customers = response.data;
            });
        };

        fetchCustomers();
    });
