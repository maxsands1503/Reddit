var app = angular.module("mainAng", ['ngRoute']);

app.config(function($routeProvider,$locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/mainPage.html',
      controller: 'inventory'
      })
    .when('/shoppingCart', {
      templateUrl: 'partials/shoppingCart.html',
      controller: 'shoppingCart'
      })
});
 
