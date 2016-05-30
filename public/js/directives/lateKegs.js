var app = angular.module('breweryApp');
app.directive('lateKegsDirective', function(){
    return {
        restrict: 'E',
        templateURL: 'partials/late_kegs.html'
    }
});

