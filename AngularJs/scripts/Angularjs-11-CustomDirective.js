var app = angular.module("sample", []);

app.controller('test',['$scope','empservice',function($scope,empservice){
    empservice.getEmployees(function (r) {
        alert(r);
        $scope.employees = r;
        
    })
}])
app.service('empservice', ["$http", "$log", function ($scope,$http,$log) {
    this.getEmployees= function (cb) {
        $http({
            url: 'Scripts/Employee.json',
            method:'GET',
        }).then(function (resp) {
            alert(resp.data);
            cb(resp.data);
        })
    }
}])
app.directive('empDetails', function () {
    return {
        template: '<!DOCTYPE html><html><head> <title></title><meta charset="utf-8" /></head><body><div>Id  :{{emp.empno}} Name:{{emp.name}}Email:{{emp.email}}</div></body></html>'
    }
});