var app = angular.module('breweryApp');
app.directive('kegsDirective', function(){
    return {
        templateURL: '/partials/kegs.html'
    }
});
