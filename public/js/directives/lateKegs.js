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
            scope.displayedKegs = [
                {
                    kegNo: 1,
                    size: 50,
                    dest: 'Tralee',
                    dateEntered:  new Date("01/06/16 23:00:00 UTC"),
                    daysLate: 3
                },
                {
                    kegNo: 1,
                    size: 50,
                    dest: 'Tralee',
                    dateEntered:  new Date("01/03/16 23:00:00 UTC"),
                    daysLate: 60
                },
                {
                    kegNo: 1,
                    size: 50,
                    dest: 'Dingle',
                    dateEntered:  new Date("03/05/16 23:00:00 UTC"),
                    daysLate: 33
                }
            ];
        }
    }
});
