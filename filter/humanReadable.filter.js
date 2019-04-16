(function() {
  var filterDemoApp = angular.module('filterDemoApp');
  filterDemoApp.filter('humanReadable',function(){
    return function(item){
      return item.replace(/([A-Z]{1})/g, function($1) { return " "+$1 }).replace(/^([a-z])/, function($1) {return $1.toUpperCase();})
    }
  })
})()
