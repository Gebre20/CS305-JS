"use strict";

function Calculator() {
  this.setValues = function (a, b) {
    this.a = a;
    this.b = b;
  };

  this.sum = function () {
    return this.a + this.b;
  };

  this.mul = function () {
    return this.a * this.b;
  };

  this.sub = function () {
    return this.a - this.b;
  };
  this.div = function () {
    return this.a / this.b;
  };
}

module.exports = { Calculator };
