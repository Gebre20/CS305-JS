//1. Sales Commission
function computeSalesCommission(salaried, salesAmount) {
  if (salaried === true) {
    if (salesAmount < 300) {
      return 0;
    } else if (salesAmount <= 500) {
      return 0.01 * salesAmount;
    } else {
      return 0.01 * 500 + 0.02 * (salesAmount - 500);
    }
  } else {
    if (salesAmount < 300) {
      return 0;
    } else if (salesAmount <= 500) {
      return 0.02 * salesAmount;
    } else {
      return 0.02 * 500 + 0.03 * (salesAmount - 500);
    }
  }
}
console.log("expect 0: ", computeSalesCommission(true, 200));
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));

//2.
function compoundInterest(amount, interestRate, year) {
  let balance = amount * (1 + interestRate / (100 * 12)) ** (year * 12);
  return balance;
}
console.log("expect 110.47", compoundInterest(100, 10, 1));
console.log("expect 16470.09", compoundInterest(10000, 5, 10));

//3. Downpayment
function calcDownpayment(cost) {
  if (cost >= 200000) {
    return 5000 + 0.1 * (cost - 200000);
    return downpayment;
  } else if (cost >= 100000) {
    return 7500 + 0.15 * (cost - 100000);
  } else if (cost >= 50000) {
    return 2500 + 0.1 * (cost - 50000);
  } else if (cost >= 0) {
    return 0.05 * cost;
  } else {
    console.log("Please enter a postive number and try again.");
  }
}
console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 22500: ", calcDownpayment(200000));
//4.
function sumOfDigits(digits) {
  let sum = 0;
  while (digits > 0) {
    let remNum = digits % 10;
    sum = sum + remNum;
    digits = parseInt(digits / 10);
  }
  return sum;
}
console.log(sumOfDigits(1234));
console.log(sumOfDigits(102));
console.log(sumOfDigits(8));

function multDigits(n) {
  let product = 1;
  let arr = String(n).split("");
  for (let i = 0; i < arr.length; i++) {
    let arrNum = Number(arr[i]);
    product *= arrNum;
  }
  return product;
}
console.log(multDigits(1234));
console.log(multDigits(102));
console.log(multDigits(8));

//5. Celcius to Fahrenheit

function convertFahrenheit(fahrenheit) {
  let celcius = (fahrenheit - 32) * (5 / 9);
  return celcius;
}
console.log("expect 0: ", convertFahrenheit(32));
console.log("expect -17.7778: ", convertFahrenheit(0));
console.log("expect 100: ", convertFahrenheit(212));
console.log("expect 37.7778: ", convertFahrenheit(100));

//6. Distance between two coordinates

function calcDistance(x1, y1, x2, y2) {
  let d = ((x2 - x1) ** 2 + (y2 - y1) ** 2) ** (1 / 2);
  return d;
}
console.log("expect 5 : ", calcDistance(0, 0, 5, 5));
