(function() {
  var promiseApp = angular.module('promiseApp');
  promiseApp.controller('Demo1Controller', ['$scope', '$timeout', '$q','$location', function($scope, $timeout, $q, $location) {
    $timeout(function() {
      alert("Updated 1st time!");
      $timeout(function() {
        alert("Updated 2nd time!");
        $timeout(function() {
          alert("Updated 3rd time!");
          $timeout(function() {
            alert("Updated 4th time!")
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);

    /*var deferred = $q.defer();
    var promise = deferred.promise;
    promise.then(function() {
      $timeout(function() {
        alert("1");
      }, 1000);
    }).then(function() {
      $timeout(function() {
        alert("2");
      }, 1000);
    })
    deferred.resolve();*/
    
  }])
})()
