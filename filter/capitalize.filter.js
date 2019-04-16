(function() {
  var filterDemoApp = angular.module('filterDemoApp');
  filterDemoApp.filter('capitalize',function(){
    return function(item){
      return item.toUpperCase();
    }
  })
})()
