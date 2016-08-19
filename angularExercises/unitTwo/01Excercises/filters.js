app.filter('kebab', function () {
  return function (input) {
    return input.replace(/_/g , "-");
  };
});

app.filter("camel", function(){
  return function (thing){
    var arr = thing.split(" ");
    var s1 = arr[0].toLowerCase();
    var s2 = arr[1][0].toUpperCase()+arr[1].substring(1).toLowerCase();
    return s1+s2;
  };
});

app.filter('redact', function () {
  return function (string, word_to_search_for) {
    return string.replace(word_to_search_for,"REDACTED")
  };
});
