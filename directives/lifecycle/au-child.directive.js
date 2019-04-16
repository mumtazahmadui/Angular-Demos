(function() {
  angular.module('lifeCycleApp')
    .directive('auChild', function() {
      return {
        restrict: 'E',
        scope: { data: '=' },
        controller: function($scope) {
          console.log("child-controller");
        },
        compile: function() {
          console.log("child-compile");
          return {
            pre: function() {
              console.log("child-pre")
            },
            post: function() {
              console.log("child-post")
            }
          }
        }
      }
    });
})()
