var mocha = require('mocha');
var expect = require('chai').expect;
var request = require('request');


describe("Screenings", function() {
  describe("Should have properties", function() {
    it("name property", function( done) {
       request.get('http://localhost:8000/api/screenings', function (err, res, body){
        var body = JSON.parse(body);
        expect(body.results[0].name).to.not.equal(undefined);
        done();
      });
    });

    it("modified and created date", function() {
      request.get('http://localhost:8000/api/screenings', function (err, res, body){
        var body = JSON.parse(body);
        expect(body.results[0].modified).to.not.equal(undefined);
        expect(body.results[0].created).to.not.equal(undefined);
        done();
      });
    });
  });


});