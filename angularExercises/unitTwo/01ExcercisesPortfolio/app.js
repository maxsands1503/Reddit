var app = angular.module("mainAng", ['ngRoute']);
app.config(function($routeProvider,$locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'partials/page1.html',
      controller: 'HomeController'
      })
      .otherwise('/', {
        templateUrl: 'partials/page1.html',
        controller: 'HomeController'
      })
      .when('/bio', { 
        templateUrl: 'partials/page2.html',
        controller: 'bioController'
      })
      .when('/resume', {
        templateUrl: 'partials/page3.html',
        controller: 'resumeController'
      })
      .when('/calculator', {
        templateUrl: 'partials/calculator.html',
        controller: 'calculatorControler'
      })
      .when('/calculator/:id/:idd', {
        templateUrl: 'partials/calculator.html',
        controller: 'calculatorControler'
      })
      .when('/calculatorrefactored', {
        templateUrl: 'partials/calculator.html',
        controller: 'calculatorControlerRefactored'
      })
      .when('/zenWisdom', {
        templateUrl: 'partials/zenWisdom.html',
        controller: 'zenWisdom'
      })
      .when('/appleMusic', {
        templateUrl: 'partials/appleMusic.html',
        controller: 'appleMusic'
      })
      .when('/railsApi', {
        templateUrl: 'partials/railsApi.html',
        controller: 'railsApi'
      })
      $locationProvider.html5Mode(true);
});
