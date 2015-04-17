describe("Pizza", function() {
    it("establishes the base price of a regular cheese pizza as $7", function() {
      var testPizza = Object.create(Pizza);
      testPizza.getPrice();
      expect(testPizza.getPrice()).to.equal(7);
    });
  });
