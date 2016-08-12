var app = angular.module("main", []);
app.controller("mainController", function($scope){
  $scope.name = "Severus Snape";
  $scope.view = {};
  $scope.view.number = 5;
  $scope.pickRandomNumber = function() {
  $scope.view.number = Math.floor(Math.random() * 10) + 1;
  }
  $scope.clearView = function(){
    $scope.view ={}
  }
})
