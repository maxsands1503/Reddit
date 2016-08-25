app.controller('main', function($scope, $http,$location) {
  $scope.view = {};

});
app.controller('shoppingCart', function($scope, $http,$location,meanTeaFactory) {
  $scope.view = {};
  $scope.view.data = meanTeaFactory.shoppingCart;
  $scope.view.toggle=false;
  $scope.view.edit=true;
  $scope.view.confirm = function(quantity,teaId){
    var arr = $scope.view.data
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]._id==teaId) {
        arr[i].quantity=Number(quantity)
      }
    $scope.view.toggle=!$scope.view.toggle;
    $scope.view.edit=true;
    $scope.view.orderTotal();
    }
  }
  $scope.view.edit = function(){
    $scope.view.toggle=!$scope.view.toggle;
    $scope.view.edit=false;
  }
  $scope.view.delete = function(teaId){
    var arr = $scope.view.data
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]._id==teaId) {
        arr.splice(i, 1);
      }
    }
    $scope.view.orderTotal();
  }
  $scope.view.orderTotal = function(){
    $scope.view.total=0;
    var arr = $scope.view.data
    for (var i = 0; i < arr.length; i++) {
      $scope.view.total+=arr[i].quantity*arr[i].price;
    }
  }
});
app.controller('inventory', function($scope, $http,$location,meanTeaFactory,teaDataFactory) {
  $scope.view = {};
  $scope.view.shoppingCart = 0;
  $scope.quantity="1";
  $scope.view.addToCart= function(quantity,teaID){
    meanTeaFactory.addTea(quantity,teaID);
    $scope.view.shoppingCart = meanTeaFactory.shoppingCart.length;

    }
  $scope.view.checkout = function(){
  $location.url("/shoppingCart")
  }
  $scope.view.data = teaDataFactory.teaData;
});
