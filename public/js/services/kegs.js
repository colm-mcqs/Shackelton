var app = angular.module('breweryApp');
app.factory('kegsService', ['$http', function($http){
    var service ={
        addKeg: function (keg) {
            var promise = $http.post('/keg/new', keg).then(function (response) {
                return response.data;
            });
            return promise;
        }
    };
    return service;
}]);
