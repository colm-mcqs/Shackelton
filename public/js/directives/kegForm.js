var app = angular.module('breweryApp');
app.directive('kegFormDirective', ['kegsService', function(kegsService){
    return {
        restrict: 'E',
        templateUrl: 'partials/keg_form.html',
        replace: true,
        scope:{

        },
        link: function (scope, element, attrs) {
            scope.showKegs = false;
            scope.displayedKegs = [];
            console.log('showKegs: ', scope.showKegs);

            scope.addKeg = function(keg){
                kegsService.addKeg(keg)
                    .then(function(data){
                        console.log(data);
                        scope.kegs = data;
                    });
            }
        }
    }
}]);
