var app = angular.module("pingPong", []);
app.controller("pingPongController", function($scope){
  $scope.fields = {}
  $scope.show = true;
  $scope.fields.score1 = 0;
  $scope.fields.score2 = 0;
  $scope.serveCount = 1

  $scope.addPointPlayerOne = function(){
    $scope.serveCount += 1
    $scope.fields.score1 = $scope.fields.score1+1;
    server();
  };
  $scope.addPointPlayertwo = function(){
    $scope.fields.score2 = $scope.fields.score2+1;
    server();
    $scope.serveCount += 1
  };
  $scope.clear = function() {
    $scope.fields = {
      score1 : 0,
      score2 : 0,
    }
  }
  var server = function(){
    if($scope.serveCount%2){
    $scope.show = !$scope.show;
    }
  };
  $scope.view = {};
  $scope.view.enterCount = 0;
  $scope.randomColor = function() {
    var x = Math.round(0xffffff * Math.random()).toString(16);
    var y = (6-x.length);
    var z = "000000";
    var z1 = z.substring(0,y);
    var color = "#" + z1 + x;
    return color;
  }
})
