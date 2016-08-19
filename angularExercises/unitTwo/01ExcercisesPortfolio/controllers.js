app.controller('HomeController', function($scope){
  $scope.view = {};
  $scope.view.message = "This is my homepage";
});
app.controller('resumeController', function($scope){
  $scope.view = {};
  $scope.view.message = "This is My Resume";
});
app.controller('bioController', function($scope){
  $scope.view = {};
  $scope.view.message = "This is My Bio";
});
app.controller('calculatorControler', function($scope,$routeParams){
  $scope.view = {};
  $scope.view.message = "This is My Calculator";
  $scope.view.answer = (Number($routeParams.id)+Number($routeParams.idd));
});
app.controller('calculatorControlerRefactored', function($scope,$location){
  $scope.view = {};
  $scope.view.message = "This is My Refactored Calculator";
  $scope.view.answer = (Number($location.search().x)+Number($location.search().y));
});
app.controller('zenWisdom', function($scope, $http) {
  $scope.view = {};
  $http.get('https://api.github.com/zennnnnnnn').then(function(data){
    $scope.view.zenData = data.data
  }, function errorCallback(response) {
    alert("you stink")
  });
});
app.controller('appleMusic', function($scope, $http) {
  $scope.view = {};
  $scope.view.titleList = [];
  $http.get('itunes.json').then(function(data){
    var arr = data.data.results;
    for (var i = 0; i < arr.length; i++) {
     $scope.view.titleList.push(arr[i].trackName);
    }
  $scope.view.music = $scope.view.titleList
  });
});
app.controller('railsApi', function($scope, $http) {
  $scope.view = {};
  $scope.view.messages = [];
  var arr = [];
  $scope.view.postMessage = function (){
    var objInput = {
      name:$scope.view.text,
      content:$scope.view.name
    }
    var finalObject = {
      message : objInput
    }
    console.log(finalObject);
    $http.post('https://messagehttpservice.herokuapp.com/messages', finalObject).then(function(data){
      alert("success")
    })
  }
  $http.get('https://messagehttpservice.herokuapp.com/messages').then(function(data){
    arr = data.data;
    $scope.view.pageMessages = data.data;
  });
});
