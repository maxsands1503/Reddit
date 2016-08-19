app.controller('OMDB', function($scope, $http,$location, movieFactory) {
  $scope.view = {};
  $scope.view.trigger = function(){
    $location.url("/movies")
    movieFactory.getMovies($scope.userInput).then(function(listOfMovies){
        movieFactory.movieArray=listOfMovies;
    })
  }
});
app.controller('OMDB2', function($scope, $http, $location, movieFactory) {
  $scope.view = {};
  $scope.searchResults = movieFactory.movieArray;
  $scope.view.getSingleMovie = function (imdbID){
      $location.url("/movie")
      movieFactory.hitApi(imdbID).then(function(singleMovieDetails){
        console.log(singleMovieDetails);
          movieFactory.movie=singleMovieDetails;
      })
  }
});
app.controller('movie', function($scope, $http,$location, movieFactory) {
  $scope.view = {};
  console.log(movieFactory.movie);
  $scope.selectedMovie=movieFactory.movie
});
