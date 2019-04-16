(function() {
  angular.module('directiveDemoApp')
    .directive('helloUser', function() {
      return {
        template: '<span ng-click="showDetails()">Hello {{name}}</span>',
        controller: function($scope) {
          $scope.showDetails = function() {
            alert("Welcome to AU 2017");
          }
        },
        link: function(scope, elem, attrs) {
          console.log(scope);
          console.log(elem);
          console.log(attrs);
          scope.$watch('name', function(oldVal, newVal) {
            if (oldVal !== newVal)
              elem[0].style.color = "blue";
          })
        }
      }
    })
})()
