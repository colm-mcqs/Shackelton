var app = angular.module('breweryApp');
app.directive('lateKegsDirective', ['kegsService', function(kegsService){
    return {
        restrict: 'E',
        templateUrl: 'partials/late_kegs.html',
        replace: true,
        scope: {

        },
        link: function (scope) {

        },
        controller: function ($scope) {
            $scope.showKegs = false;
            $scope.displayedKegs =null;

            kegsService.getLateKegs()
                .then(function (data) {
                    $scope.lateKegs = data;
            });

            $scope.getLateKegs = function () {
                kegsService.getLateKegs()
                    .then(function (data) {
                        scope.lateKegs = data;
                    })
            }
        }
    }
}]);
