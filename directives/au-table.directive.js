(function() {
  angular.module('directiveDemoApp')
    .directive('auTable', function() {
      return {
        restrict: 'E',
        scope: { data: '=' },
        controller: function($scope) {
        	console.log($scope);
        },
        templateUrl:'./au-table.directive.html'
      }
    })
})()
