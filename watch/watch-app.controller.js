(function() {
  var watchApp = angular.module('watchApp');
  watchApp.controller('WatchAppController', ['$rootScope','$scope', function($rootScope, $scope) {
    $scope.a = 1;
    $scope.b = 2;
    /*$scope.$watch('b',function(newVal,oldVal){
    	console.log(newVal);
    	console.log(oldVal);
    })*/

    /*$scope.alphabets = ['a', 'b', 'c', 'd', 'e'];
    (function() {
      setTimeout(function() {
        $scope.alphabets.pop();
        $scope.$digest();
      }, 2000);
    })()
    $scope.$watchCollection('alphabets', function(newVal, oldVal) {
      if (newVal !== oldVal) {
        console.log('alphabet popped');
      }
    });*/

  }])
})()
