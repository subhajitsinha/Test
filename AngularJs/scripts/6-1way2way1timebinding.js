/// <reference path="angular.min.js" />
var app = angular.module("sample", []);
app.controller("test", ["$scope", function ($scope) {
    $scope.a = 10;
    $scope.b = 20;
    $scope.GetSum = function () {
        $scope.a = $scope.a * 2;
        $scope.b = $scope.b * 2;
        $scope.Sum = parseInt($scope.a) + parseInt($scope.b);
    }
}])