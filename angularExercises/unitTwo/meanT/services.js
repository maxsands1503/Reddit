app.factory("meanTeaFactory", function($http){
  return {
    shoppingCart:[],

    addTea: function (quantity,teaID) {
      this.shoppingCart.teaQuantity=quantity;
      this.shoppingCart.push(teaID)
    },
    hitApi: function (movieID) {

    }
  }
})
