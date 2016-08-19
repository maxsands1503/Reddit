var app = angular.module("mainAng", ['ngRoute']);
app.config(function($routeProvider,$locationProvider) {
  $routeProvider
    .when('/movies', {
      templateUrl: 'partials/showMovies.html',
      controller: 'OMDB2'
      })
    .when('/movie', {
      templateUrl: 'partials/singleMovie.html',
      controller: 'movie'
      })
    
});
