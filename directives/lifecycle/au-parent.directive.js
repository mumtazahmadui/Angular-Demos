(function() {
  angular.module('lifeCycleApp')
    .directive('auParent', function() {
      return {
        restrict: 'E',
        scope: { data: '=' },
        controller: function($scope) {
          console.log("parent-controller");
        },
        compile: function() {
          console.log("parent-compile");
          return {
            pre: function() {
              console.log("parent-pre")
            },
            post: function() {
              console.log("parent-post")
            }
          }
        }
      }
    });
})()
