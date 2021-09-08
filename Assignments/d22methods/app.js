"use strict";

function Accumulator(currentValue, increment) {
  this.currentValue = currentValue;
  this.increment = increment;

  this.accumulate = function () {
    return (this.currentValue += this.increment);
  };

  this.report = function () {
    return this.currentValue;
  };
}
module.exports = { Accumulator };
