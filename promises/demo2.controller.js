(function() {
  var promiseApp = angular.module('promiseApp');
  promiseApp.controller('Demo2Controller', ['$scope', '$timeout', '$q', function($scope, $timeout, $q) {
    $scope.number1 = 0;
    $scope.number2 = 0;

    function add(x, y) {
      var q = $q.defer();
      $timeout(function() {
        var result = x + y;
        if (result >= 0) {
          q.resolve(x + y);
        } else {
          q.reject('negative value: ' + result);
        }
      }, 1000);
      return q.promise;
    }

    $scope.calculate = function(n1, n2) {
      $scope.result = "";
      $scope.failure = "";
      add(n1, n2)
        .then(function(result) {
          return add(result, 8);
        })
        .then(function(result) {
          return add(result, -5);
        })
        .then(function(result) {
          $scope.result = result;
        })
        .catch(function(failure) {
          $scope.failure = failure;
        })
    }
  }])
})()
