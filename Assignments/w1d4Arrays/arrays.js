"use strict";

module.exports = {
  maxOfThree,
  sum,
  multiply,
  findLongestWord,
  reverseArray,
  reverseArrayInPlace,
  scoreExams,
};

function maxOfThree(num1, num2, num3) {
  if (num1 > num2) {
    if (num1 > num3) {
      return num1;
    } else {
      return num3;
    }
  } else {
    if (num2 > num3) {
      return num2;
    } else {
      return num3;
    }
  }
}

function sum(arr1) {
  let sum = 0;
  for (let eachElement of arr1) {
    sum += eachElement;
  }
  return sum;
}

function multiply(arr3) {
  let product = 1;
  for (let eachOne of arr3) {
    product *= eachOne;
  }
  return product;
}

function findLongestWord(words) {
  let longestWordLength = words[0].length;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWordLength) {
      longestWordLength = words[i].length;
    }
  }
  return longestWordLength;
}

function reverseArray(initialArray) {
  let newArray = [];
  let index = 0;
  for (let i = initialArray.length - 1; i >= 0; i--) {
    newArray[index] = initialArray[i];
    index++;
  }
  return newArray;
}

function reverseArrayInPlace(array) {
  let j = 0;
  let temp = [];
  for (let i = array.length - 1; i >= 0; i--) {
    temp[j] = array[i];
    j++;
  }
  for (let i = 0; i < temp.length; i++) {
    array[i] = temp[i];
  }
  return array;
}

function scoreExams(studentAnswers, correctAnswers) {
  let score = [];
  for (let eachAnswer of studentAnswers) {
    let count = 0;
    for (let i = 0; i < eachAnswer.length; i++) {
      if (eachAnswer[i] === correctAnswers[i]) count++;
    }
    score.push(count);
  }
  return score;
}
