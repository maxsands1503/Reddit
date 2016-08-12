var app = angular.module("main", []);
app.controller("mainController", function($scope){
  $scope.view = {};
  $scope.view.votes = 0;
  $scope.show = false;
  $scope.view.author = "Severus Snape";
  $scope.view.paragraph = "blah blah blah";
  $scope.view.date = "10/9/86";
  $scope.view.comments = "Severus Snape";
  $scope.showForm = function() {
    $scope.show = !$scope.show
  }
  $scope.view.posts =[
  {
    votes:0,
    location:'lake George',
    author: 'Rick',
    image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
    date: 10,
    comments: 369.99,
    onSale: true
  },
  {
    votes:5,
    location:'lake George',
    author: 'Ross',
    image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
    date: 5,
    comments: 369.99,
    onSale: true
  },
  {
    votes:2,
    location:'lake George',
    author: 'Purple Lambos',
    image: 'http://ecx.images-amazon.com/images/I/713u2gDQqML._SX522_.jpg',
    date: 11,
    comments: 369.99,
    onSale: true
  }
  ]
})
