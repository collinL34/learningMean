angular.module('app')
    .service('Customer', function($http) {
        let baseUrl = '/customers'

        this.index = function() {
            return $http.get(baseUrl + '.json');
        };

        this.show = function(customerId) {
            return $http.get(baseUrl + '/' + customerId + '.json');
        };

        this.destroy = function(customerId) {
            return $http.delete(baseUrl + '/' + customerId + '.json');
        };

        this.create = function(customer) {
            return $http.post(baseUrl + '.json', {
                customer: customer
            });
        };

        this.update = function(customer) {
            return $http.put(baseUrl + '/' + customer.id + '.json', {
                customer: customer
            });
        };

        this.search = function(query) {
            return $http.get(base_url + '/search.json', {
                params: {
                    query: query
                }
            });
        };

    });
