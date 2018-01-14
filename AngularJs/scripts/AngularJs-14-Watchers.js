var app = angular.module("sample", []);
app.controller("test", function ($scope) {
    $scope.a = 15;
    $scope.b = 20;
    $scope.c = 40;

    $scope.updatec = function () {
        $scope.c = $scope.a * 20;
    };
    $scope.$watch("c", function (oldValue, newValue) {
        alert("value of c has been changed");
    });
    $rootScope.$watch(function(){
        console.log("digest cycle started");
    })
})