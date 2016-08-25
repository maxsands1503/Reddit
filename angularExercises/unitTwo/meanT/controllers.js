app.controller('main', function($scope, $http,$location) {
  $scope.view = {};

});
app.controller('shoppingCart', function($scope, $http,$location,meanTeaFactory) {
  $scope.view = {};
  $scope.view.data = meanTeaFactory.shoppingCart;
});
app.controller('inventory', function($scope, $http,$location,meanTeaFactory,teaDataFactory) {
  $scope.view = {};
  $scope.view.shoppingCart = 0;
  $scope.quantity="1";
  $scope.view.addToCart= function(quantity,teaID){
    meanTeaFactory.addTea(quantity,teaID);
    $scope.view.shoppingCart = meanTeaFactory.shoppingCart.length;
    // console.log(quantity)
    //   console.log(teaID);
    //   console.log(meanTeaFactory);
    }
  $scope.view.checkout = function(){
    console.log("hi");
  $location.url("/shoppingCart")
  }
  $scope.view.data = teaDataFactory.teaData;
});
