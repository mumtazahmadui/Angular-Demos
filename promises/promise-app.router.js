var promiseApp = angular.module('promiseApp');
promiseApp.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when("/", {
      templateUrl: "promises/promise-demo1.html",
      controller: "Demo1Controller"
    })
    .when("/demo2", {
      templateUrl: "promises/promise-demo2.html",
      controller: "Demo2Controller",
      controllerAs: "vm"
    })
    .when("/demo3", {
      templateUrl: "promises/promise-demo3.html",
      controller: "Demo3Controller",
      resolve: {
        requiredData: function($http) {
          return $http.get('../promises/employees.json');
        }
      }
    })
    .when("/demo4", {
      templateUrl: "promises/promise-demo4.html",
      controller: "Demo4Controller"
    })
    .otherwise({
      redirectTo: "/"
    });
});
