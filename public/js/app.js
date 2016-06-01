/**
 * Created by Colm on 22/05/2015.
 */
var app = angular.module('breweryApp', ['ngRoute', 'ui.bootstrap', 'smart-table']);

app.config(function($locationProvider, $routeProvider){
    //$locationProvider.html5mode(true);
    $routeProvider
        .when('/', {
            template: `<kegs-directive></kegs-directive>`
        })
})
    .controller('kegsController', ['$scope', function($scope){
    }])
    .filter('addVolume', function () {
        return function (input) {
            if(!input) return null;

            return `${input.toString()}L`
        }
    });