var app = angular.module('breweryApp');
app.directive('kegFormDirective', ['kegsService', function(kegsService){
    return {
        restrict: 'E',
        templateUrl: 'public/partials/keg_form.html',
        replace: true,
        scope:{

        },
        controller: function ($scope) {
            $scope.keg = {};
            $scope.showKegs = false;
            $scope.opened = false;
            $scope.format = 'dd-MMMM-yyyy';
            $scope.open = function(){
                $scope.opened = true;
            };

            $scope.displayedKegs = [];

            $scope.dateOptions = {
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(2015, 1, 1),
                startingDay: 1
            };

            $scope.addKeg = function(keg){
                kegsService.addKeg(keg)
                    .then(function(data){
                        $scope.kegs = data;
                    });
            };

            $scope.searchDestinations = function (dest) {
               kegsService.getDestinations(dest)
                   .then(function(match){
                       return match;
                   })
            };

            $scope.addDestination = function(dest){
                kegsService.addDestination(dest)
                    .then(function (data) {
                        console.log(data);
                    })
            }
        }
    }
}]);
