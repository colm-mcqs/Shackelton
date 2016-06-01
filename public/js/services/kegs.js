var app = angular.module('breweryApp');
app.factory('kegsService', ['$http', function($http){
    var service ={
        addKeg: function (keg) {
            return $http.post('/keg/insert', keg).then(function (response) {
                return response.data;
            });
        },

        addDestination: function (dest) {
            return $http.post('/destination/insert', dest).then(function (response) {
                return response.data;
            })
        }
    };
    return service;
}]);
