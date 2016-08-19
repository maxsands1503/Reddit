app.filter('kebab', function () {
  return function (input) {
    return input.replace(/_/g , "-");
  };
});

app.filter("camel", function(){
  return function (s){
    return s.replace(/(\-\w)/g, function(m){return m[1].toUpperCase();});
  };
});
 
