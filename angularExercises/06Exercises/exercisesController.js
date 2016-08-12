var app = angular.module("exerciseController", []);
app.controller("MySecondController", function($scope){
  $scope.favColor = "Blue";
  $scope.secondsInACentury = 60*60*24*365*100;
  $scope.rightNow = new Date();
})
