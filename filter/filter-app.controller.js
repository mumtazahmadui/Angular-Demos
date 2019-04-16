(function() {
  var filterDemoApp = angular.module('filterDemoApp');
  filterDemoApp.controller('FilterDemoAppController', ['$scope', '$filter', '$http', function($scope, $filter, $http) {
    $scope.data = {};
    $scope.date = new Date();
    $http.get('./employees.json').then(function(response) {
      $scope.data.employeeList = response.data.map(function(obj) {
        obj.salary = $filter('currency')(obj.salary, obj.currencyCode);
        return obj;
      });
    }, function(error) {
      alert('An error occurred!')
    })
  }])
})()