(function() {
  angular.module('directiveDemoApp')
    .directive('auDropDown', function() {
      return {
        restrict: 'E',
        scope: {
          data: '=',
          displayVal: '@'
        },
        require: '?ngModel',
        template: '<select ng-options="d as d[displayVal] for d in data" ng-model="selectedVal"></select>',
        link: function(scope, elem, attrs, ngModelCtrl) {
          scope.$watch('selectedVal', function(newVal, oldVal) {
            if (newVal !== oldVal) {
              ngModelCtrl.$setViewValue(newVal);
            }
          })
        }
      }
    })
})()
