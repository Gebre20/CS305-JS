"use strict";
/* eslint-disable */
/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser  add all of your function names here that you need for the node mocha tests */


function topSalary(salaries) {
if(Object.keys(salaries).length===0)
  return null;

  let maxSalary = -(2**53);
  let topEarner;
  for(let emp in salaries){
    if(salaries[emp]>maxSalary){
      maxSalary= salaries[emp];
      topEarner = emp;
    }
  }
return topEarner;
  }
  function getDateAgo(date, days) {
    let newDate = new Date(date);
  
    newDate.setDate(date.getDate() - days);
    return newDate.getDate();
  }
  module.exports = { topSalary, getDateAgo};
