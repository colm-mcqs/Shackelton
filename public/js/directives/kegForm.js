var app = angular.module('breweryApp');
app.directive('kegFormDirective', ['kegsService', '$document', function(kegsService, $document){
    return {
        restrict: 'E',
        templateUrl: 'partials/keg_form.html',
        replace: true,
        scope:{

        },
        link: function (scope, element, attrs) {
            scope.keg = {};
            scope.dest = {
            };
            scope.showKegs = false;
            scope.opened = false;
            scope.format = 'dd-MMMM-yyyy';
            scope.open = function(){
                scope.opened = true;
            };

            scope.displayedKegs = [];

            scope.dateOptions = {
                formatYear: 'yy',
                maxDate: new Date(2020, 5, 22),
                minDate: new Date(),
                startingDay: 1
            };

            scope.addKeg = function(keg){
                kegsService.addKeg(keg)
                    .then(function(data){
                        console.log(data);
                        scope.kegs = data;
                    });
            }

            scope.addDestination = function(dest){
                kegsService.addDestination(dest)
                    .then(function (data) {
                        console.log(data);
                        $document.getElementById("destForm").reset();
                    })
            }
        }
    }
}]);
