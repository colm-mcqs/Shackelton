var app = angular.module('breweryApp');
app.directive('kegsDirective', [function(){
    return {
        templateUrl: 'partials/kegs.html',
        restrict: 'E',
        scope: {},
        replace: true,
        link: function (scope) {
            console.log('asfd')
        }
    }
}]);