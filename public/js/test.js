
var expect = chai.expect;

describe("Interface", function() {
  describe("Filters", function() {
    it("should have a name option", function() {
      var name= $('#name');
      expect(name).to.not.equal(undefined);
    });

    it("should have a severity dropdown with 5 code options (one is generic)", function() {
      var optionslength= $('#severity option').length;
      expect(optionslength).to.equal(5);
    });
  });


});