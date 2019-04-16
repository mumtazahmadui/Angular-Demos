(function() {
  var promiseApp = angular.module('promiseApp');
  promiseApp.controller('PromiseAppController', ['$scope', '$timeout', '$q','$location', function($scope, $timeout, $q, $location) {
    $scope.isActive = function (viewLocation) {
        return viewLocation === $location.path();
    };
    
  }])
})()
