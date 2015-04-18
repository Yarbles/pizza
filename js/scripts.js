var Pizza = {
  price: 7,
  pepperoni: false,
  large: false,

  pepperoniPlease: function() {
    this.pepperoni = true;
  },

  largePlease: function() {
    this.large = true;
  },

getPrice: function() {
  if (this.pepperoni === true) {
    this.price += 3;
  }
  if (this.large === true) {
    this.price += 4;
  }
  return this.price;
  }
};

$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();

    var topping =$("select#topping").val();
    var size =$("select#size").val();

    var new_pizza = Object.create(Pizza);

    new_pizza.pepperoniPlease(topping);
    new_pizza.largePlease(size);

    var total = new_pizza.getPrice();

    $("#total").text(total);

  });
});
