var app = angular.module('breweryApp');
app.directive('kegFormDirective', function(){
    return {
        restrict: 'E',
        templateURL: '/partials/keg_form.html'
    }
});

