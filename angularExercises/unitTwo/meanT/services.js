app.factory("movieFactory", function($http){
  return {
    getMovies: function (input) {
      return $http.get('http://www.omdbapi.com/?s='+input).then(function(data){
        return data.data.Search;
      }, function errorCallback(response) {
        alert("you stink")
      });
    },
    hitApi: function (movieID) {
      return $http.get('http://www.omdbapi.com/?i='+movieID).then(function(data){
        return data.data;
      }, function errorCallback(response) {
        alert("you stink")
      });
    }
  }
})
