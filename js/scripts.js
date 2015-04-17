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
