/**
 * Created by Colm on 22/05/2015.
 */
var app = angular.module('iggShop', ['ngRoute']);

app.config(function($locationProvider, $routeProvider){
    $locationProvider.html5mode(true);
    $routeProvider
        .when('/', {
            templateUrl: "partials/shop.html"
        })
});