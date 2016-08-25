app.controller('main', function($scope, $http,$location) {
  $scope.view = {};

});
app.controller('shoppingCart', function($scope, $http,$location,meanTeaFactory) {
  $scope.view = {};
  $scope.view.data = meanTeaFactory.shoppingCart;
  $scope.view.orderTotal = function (){
    
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
