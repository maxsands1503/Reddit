app.factory("meanTeaFactory", function($http){
  return {
    shoppingCart:[],

    addTea: function (quantity,tea) {
      if(this.shoppingCart.length===0){
        tea.quantity = Number(quantity);
        this.shoppingCart.push(tea)
      } else {
        var count = this.shoppingCart.length
        for (var i = 0; i < count; i++) {
          if(this.shoppingCart[i]._id===tea._id){
            this.shoppingCart[i].quantity+=Number(quantity)
            return
          }else if (i===this.shoppingCart.length-1){
            tea.quantity = Number(quantity);
            this.shoppingCart.push(tea)
          }
        }
      }
    },
    hitApi: function (movieID) {

    }
  }
})
