var app = angular.module("sample", []);
app.controller("test", function ($scope,$http) {
    $http.get("Scripts/employee.json")
        .then(function (response) {
            $scope.employee = response.data;
        })
})