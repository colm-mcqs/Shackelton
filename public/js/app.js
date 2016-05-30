/**
 * Created by Colm on 22/05/2015.
 */
var app = angular.module('breweryApp', ['ngRoute']);

app.config(function($locationProvider, $routeProvider){
    //$locationProvider.html5mode(true);
    $routeProvider
        .when('/', {
            templateUrl: "partials/kegs.html"
        })
})
    .controller('kegsController', ['$scope', function($scope){
        $scope.kegs = [
            1,2,3,4
        ]
    }]);