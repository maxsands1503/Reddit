app.factory("meanTeaFactory", function($http){
  return {
    shoppingCart:[],

    addTea: function (quantity,tea) {
      tea.quantity = Number(quantity);
      this.shoppingCart.push(tea)
      // console.log(this.shoppingCart);
    },
    hitApi: function (movieID) {

    }
  }
})
