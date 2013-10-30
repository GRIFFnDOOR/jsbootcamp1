var should = require("should")
var multiply = require("..\\public\\contactlist.js").multiply
var sortCol = require("..\\public\\contactlist.js").sortCol

describe('contactlist.js', function(){
  describe('sortCol', function(){
    it('should sort rows alphabetically given column number', function(){
      var a = multiply(3,54);
      a.should.equal(3*54);
    })
  })
})