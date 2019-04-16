(function(){
	angular.module('myApp')
	.controller('MyAppController',['$scope',function($scope){
		var vm = this;
		vm.schoolName = "Bal Bharati Public School";
 		vm.students =[{'studentId':'23','name':'Jane'},{'studentId':'24','name':'Jane'}]
	}])
})()