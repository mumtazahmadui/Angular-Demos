(function() {
  angular.module('directiveDemoApp')
    .controller('DirectiveDemoAppController', ['$scope', function($scope) {
      $scope.data = {};

      $scope.data.countries = [{
        id: 1,
        label: 'Australia',
      }, {
        id: 2,
        label: 'India',
      }];

      $scope.data.currencies = [{
        id: 1,
        label: 'Euro',
        code: 'EUR'
      }, {
        id: 2,
        label: 'US Dollar',
        code: 'USD'
      }, {
        id: 3,
        label: 'Indian Rupee',
        code: 'INR'
      }, {
        id: 4,
        label: 'Australian Dollars',
        code: 'AUD'
      }]

    }])
})()
