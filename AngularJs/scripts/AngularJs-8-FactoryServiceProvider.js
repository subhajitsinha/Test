//factory
var app = angular.module("app", []);
app.controller('samplefactory', ['$scope', 'calcfactory', function ($scope, calcfactory) {
    $scope.a = 20;
    $scope.b = 30;
    $scope.doSum = function () {
        calcfactory.getSum($scope.a, $scope.b);
    }
    $scope.doSubstract = function () {
        $scope.substract = calcfactory.getSubstract($scope.a, $scope.b);
    }
}])
app.factory("calcfactory", ["$http", "$log", function ($http, $log) {
    var ocalcservice = {};
    ocalcservice.getSum = function (a, b) {
        $http({
            url: "http://localhost:7478/Sum?a="+a+"&b="+b,
            method:"GET"
        }).then(function (resp) {
            console.log("factory initiated");
            console.log(resp.data);
        }, function (resp) {
            console.log("error while doing calculation");
        })
    }
    ocalcservice.getSubstract = function (a, b) {
        return b - a;
    }
    return ocalcservice;
}])

//service
app.controller('sampleservice', ['$scope', 'calcservice', function ($scope, calcservice) {
    $scope.a = 20;
    $scope.b = 30;
    $scope.doSum = function () {
        calcservice.getSum($scope.a, $scope.b);
    }
    $scope.doSubstract = function () {
        $scope.substract = calcservice.getSubstract($scope.a, $scope.b);
    }
}])
app.service("calcservice", ["$http", "$log", function ($http, $log) {
    this.getSum = function (a, b) {
        $http({
            url: "http://localhost:7478/Sum?a=" + a + "&b=" + b,
            method: "GET"
        }).then(function (resp) {
            console.log("factory initiated");
            console.log(resp.data);
        }, function (resp) {
            console.log("error while doing calculation");
        })
    }
    this.getSubstract = function (a, b) {
        return b - a;
    }
}])

//app.controller('sampleprovider', ['$scope', 'calcprovider', function ($scope, calcprovider) {
//    //$scope.a = 20;
//    //$scope.b = 30;
//    //$scope.doSum = function () {
//    //    calcprovider.getSum($scope.a, $scope.b);
//    //}
//    //$scope.doSubstract = function () {
//    //    $scope.substract = calcprovider.getSubstract($scope.a, $scope.b);
//    //}
//}])
//app.provider("calcService", function () {
//    //var baseUrl = '';
//    //this.config = function (url) {
//    //    baseUrl = url;
//    //}
//    //this.$get = ['$log', '$http', function ($log, $http) {
//    //    var ocalcservice = {};
//    //    ocalcservice.getSum = function (a, b) {
//    //        $http({
//    //            url: baseUrl + "/Sum?a=" + a + "&b=" + b,
//    //            method: "GET"
//    //        }).then(function (resp) {
//    //            console.log("factory initiated");
//    //            console.log(resp.data);
//    //        }, function (resp) {
//    //            console.log("error while doing calculation");
//    //        })
//    //    }
//    //    ocalcservice.getSubstract = function (a, b) {
//    //        return b - a;
//    //    }
//    //    return ocalcservice;
//    //}]
//});
//app.config(['calcServiceProvider', function (calcServiceProvider) {
//    //calServiceProvider.config("http://localhost:7478");
//}]);

