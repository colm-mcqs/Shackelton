var app = angular.module('breweryApp');
app.directive('lateKegsDirective', function(){
    return {
        restrict: 'E',
        templateUrl: 'partials/late_kegs.html',
        replace: true,
        scope: {

        },
        link: function (scope) {
            scope.showKegs = false;
            scope.displayedKegs = [];
        }
    }
});
