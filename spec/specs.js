describe("Pizza", function() {
  describe("pepperoniPlease", function() {
    describe("largePlease", function() {
      it("establishes the base price of a regular cheese pizza as $7", function() {
        var testPizza = Object.create(Pizza);
        testPizza.getPrice();
        expect(testPizza.getPrice()).to.equal(7);
      });

      it("establishes the base price of a pepperoni pizza as $10", function () {
        var testPizza = Object.create(Pizza);
        testPizza.pepperoniPlease();
        expect(testPizza.getPrice()).to.equal(10);
      });

      it("establishes the base price of a large pizza as $11", function () {
        var testPizza = Object.create(Pizza);
        testPizza.largePlease();
        expect(testPizza.getPrice()).to.equal(11);
      });
    });
  });
});
