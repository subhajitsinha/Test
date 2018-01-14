var app = angular.module("sample", []);
app.controller("test", (["$scope","$http", function ($scope,$http) {
    $scope.a = 20;
    $scope.b = 30;

    $scope.getSum = function () {
        $http({
            url: 'http://localhost:7478/Sum?a=' + $scope.a + '&b=' + $scope.b,
            method: 'GET'
        }).then(function (resp) {
            $scope.sum = resp.data;
        }, function (resp) {

        })
    };
}]))