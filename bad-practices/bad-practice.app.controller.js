(function() {
  angular.module('badPracticeApp')
    .controller('BadPracticeController', ['$scope', function($scope) {
      //$scope.data = {};
      //$scope.data.schoolName = "Bal Bharati Public School";
      $scope.schoolName = "Bal Bharati Public School";
      $scope.students = [{ 'studentId': '23', 'name': 'Jane' }, { 'studentId': '24', 'name': 'Jane' }]
    }])
})()
