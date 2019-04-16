(function() {
  var promiseApp = angular.module('promiseApp');
  promiseApp.controller('Demo4Controller', ['$scope', '$q', '$http', function($scope, $q, $http) {
    var countries = $http.get('../promises/countries.json');
    var currencies = $http.get('../promises/currencies.json');
    $q.all({ countries: countries, currencies: currencies }).then(function(result) {
      $scope.countries = result.countries.data;
      $scope.currencies = result.currencies.data;
    }, function(error) {
      console.log(error);
    })
  }])
})()
