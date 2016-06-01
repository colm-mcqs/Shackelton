/**
 * Created by Colm on 22/05/2015.
 */
var app = angular.module('breweryApp', ['ngRoute']);

app.config(function($locationProvider, $routeProvider){
    //$locationProvider.html5mode(true);
    $routeProvider
        .when('/', {
            template: `<kegs-directive></kegs-directive>`
        })
})
    .controller('kegsController', ['$scope', function($scope){
        $scope.showKegs = false;
        $scope.displayedKegs = [];
        console.log('Keg 2: ', $scope.showKegs);
    }]);