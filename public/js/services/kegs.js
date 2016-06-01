var app = angular.module('breweryApp');
app.factory('kegsService', ['$http', function($http){
    return {
        addKeg: function (keg) {
            return $http.post('/keg/insert', keg).then(function (response) {
                return response.data;
            });
        },

        addDestination: function (dest) {
            return $http.post('/destination/insert', dest).then(function (response) {
                return response.data;
            })
        },

        getDestinations: function(dest){
            return $http.get(`/destinations/${dest}`).then(function(response){
                return response.data.map(x=>{return x.name;});
            })
        },

        getLateKegs: function () {
            return $http.get('/kegs/late').then(function (response) {
                return response.data;
            })
        }
    };
}]);
