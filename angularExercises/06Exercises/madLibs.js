var app = angular.module("madLibs", []);
app.controller("madLibsController", function($scope){
  $scope.fields = {};
  $scope.fields.name = "Severus Snape";
  $scope.show = false;
  $scope.toggle = function(){
    $scope.show = !$scope.show;
  };
  $scope.clear = function() {
    $scope.fields = {}
    $scope.show = !$scope.show;
  }
})
  
