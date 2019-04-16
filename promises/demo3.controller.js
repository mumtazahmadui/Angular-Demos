(function() {
  var promiseApp = angular.module('promiseApp');
  promiseApp.controller('Demo3Controller', ['$scope','requiredData', function($scope,requiredData) {
   $scope.employees = requiredData.data;
  }])
})()
