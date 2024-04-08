
var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    $scope.user = {};
    $scope.totalAmount = 0;

    $scope.courses = [
        { name: 'Full-Stack', price: 10000000 },
        { name: 'Thiết kế trang web cơ bản', price: 1500000 },
        { name: 'Automation Test', price: 20000000 }
    ];

    $scope.calculateTotal = function () {
        if ($scope.user.selectedCourse) {
            $scope.totalAmount = $scope.user.selectedCourse.price;
        } else {
            $scope.totalAmount = 0;
        }
        return $scope.totalAmount;
    };
});
