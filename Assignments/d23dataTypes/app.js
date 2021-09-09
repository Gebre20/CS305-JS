"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = {
  ucFirst,
  getMaxSubSum,
  truncate,
  checkSpam,
  extractCurrencyValue,
  camelize,
}; //add all of your function names here that you need for the node mocha tests

function ucFirst(str) {
  return str.charAt(0).toUpperCase() + "" + str.slice(1);
}

function checkSpam(str) {
  const text = str.toLowerCase();
  return text.includes("viagra") || text.includes("xxx");
}

function truncate(str, maxlength) {
  if (str.length > maxlength) return str.slice(0, maxlength - 1) + "…";
  return str;
}
function extractCurrencyValue(currency) {
  return Number(currency.slice(1));
}

/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 
 */
function getMaxSubSum(arr) {
  let max = 0;
  let subSum = 0;

  for (let item of arr) {
    // for each item of arr
    subSum += item; // add it to partialSum
    max = Math.max(max, subSum); // remember the maximum
    if (subSum < 0) subSum = 0; // zero if negative
  }

  return max;
}

function camelize(str) {
  return str
    .split("-")
    .map((item, index) =>
      index == 0 ? item : item[0].toUpperCase() + item.slice(1)
    )
    .join("");
}
