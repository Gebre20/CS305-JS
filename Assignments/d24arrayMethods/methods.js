"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {
  groupById,
  unique,
  filterRangeInPlace,
  filterRange,
  Calculator,
}; //add all of your function names here that you need for the node mocha tests

// function filterRange(arr, a, b) {
//   let filteredArray = arr.filter(function (n, a, b) {
//     if (n >= a && n <= b) return item;
//   });
//   return filteredArray || arr;
// }
function filterRange(arr, min, max) {
  let newArr = arr.filter((num, min, max) =>
    num >= min && num < max ? num : arr
  );
}

function filterRangeInPlace(arr, num1, num2) {
  for (let i = 0; i < arr.length; i++) {
    let target = arr[i];
    if (target < num1 || target > num2) {
      arr.splice(i, 1);
      i--;
    }
  }
}

function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,

    "/": (a, b) => a / b,
  };

  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }

    return this.methods[op](a, b);
  };

  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

function unique(arr) {
  if (arr.length === 0) return "";
  let result = [arr[0]];
  for (let each of arr) {
    if (result.indexOf(each) === -1) result.push(each);
  }
  return result;
}

function groupById(arr) {
  return arr.reduce((item, value) => {
    item[value.id] = value;
    return item;
  }, {});
}
