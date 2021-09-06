"use strict";

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser
 */
//module.exports = { double, times100, myMap, triple1, triple2() }; //, triple1, triple2

//1. double
function double(number) {
  return 2 * number;
}

//2. times 100
function times100(number) {
  return 100 * number;
}

//3. myMap
function myMap(arr, double, times100) {
  let doubleArray = [];
  let times100Array = [];
  if (double) {
    for (let i = 0; i < arr.length; i++) {
      doubleArray[i] = double(arr[i]);
    }
    return doubleArray;
  } else {
    for (let i = 0; i < arr.length; i++) {
      times100Array[i] = times100(arr[i]);
    }
    return times100Array;
  }
}

//4. tripple

let triple1 = function (arg) {
  return 3 * arg;
};
let triple2 = (arg) => {
  return 3 * arg;
};
module.exports = { double, times100, myMap, triple1, triple2 };
