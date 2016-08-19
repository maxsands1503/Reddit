app.factory("meanTeaFactory", function($http){
  return {
    addTea: function (quantiy,teaID) {
       console.log("hi");
       console.log(teaID);
    },
    hitApi: function (movieID) {

    }
  }
})
