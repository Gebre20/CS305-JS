"use strict";
 
/// comment out the node specific code when going to the browser
const assert = require("assert");
const myExports = require("./destructure.js");
const topSalary = myExports.topSalary;  //do this for all of the
const getDateAgo = myExports.getDateAgo; 
 
    
/* 
Create the function topSalary(salaries) that returns the name of the top-paid person.
    If salaries is empty, it should return null.
    If there are multiple top-paid persons, return any of them.
P.S. Use Object.entries and destructuring to iterate over key/value pairs.
*/
describe("topSalary", function() {
    it("returns top-Paid employee", function() {
      let salaries = {
        "John": 100,
        "Pete": 300,
        "Mary": 250
      };
  
      assert.equal( topSalary(salaries), "Pete" );
    });
  
    it("returns null if empty object", function() {
        console.log("topsalary: ", topSalary({}) );
      assert.strictEqual( topSalary({}), null);
    });
  });
  describe("getDateAgo", function() {

    it("26 days before 25.06.2018 is day 30", function() {
      assert.equal(getDateAgo(new Date(2018, 6, 25), 25), 30);
    });
  
  
    it("1 day before 25.06.2018 is day 24", function() {
      assert.equal(getDateAgo(new Date(2018, 6, 25), 1), 24);
    });
  
    it("50 days before 25.06.2018 is day 5", function() {
      assert.equal(getDateAgo(new Date(2018, 6, 25), 50), 5);
    });
  
    it("original date remains same", function() {
      let targetDate = new Date(2018, 6, 25);
      let dateEntry = new Date(targetDate);
      getDateAgo(dateEntry, 100);
      assert.equal(targetDate.getTime(), dateEntry.getTime());
    });
  
  });
