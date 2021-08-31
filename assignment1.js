let prompt = require("prompt-sync")();
//1.
let salesman = prompt("Enter salaried or hourly: ");
let sales = prompt("Enter sales: ");

if (salesman === "salaried") {
  if (sales < 300) console.log("Your commission is less than 300");
  else if (sales <= 500) console.log("Commission: " + 0.01 * sales);
  else console.log("Commission: " + 0.02 * sales);
} else if (salesman !== "salaried") {
  if (sales < 300) console.log("Your commission is less than 300");
  else if (sales <= 500) console.log("Commission: " + 0.02 * sales);
  else console.log("Commission: " + 0.03 * sales);
}
//2. while and do while
let age = prompt("Enter your age if it is greater than 18: ");
while (true) {
  if (age > 18) {
    console.log("You are above 18.");
    break;
  } else {
    age = prompt("Enter your age if it is greater than 18: ");
  }
}
age = prompt("Enter your age if it is greater than 18: ");
do {
  if (age > 18) {
    console.log("You are above 18.");
    break;
  } else {
    age = prompt("Enter your age if it is greater than 18: ");
  }
} while (true);

//3. Savings Balance
let initialAmount = prompt("Enter initial amount: ");
let interestRate = prompt("Enter interest rate: ");
let years = prompt("Enter the number of years: ");

function savingsBalance(amount, rate, years) {
  balance = amount * (1 + rate / 12) ** (12 * years);
  console.log("Your balance is: " + balance);
}
savingsBalance(initialAmount, interestRate, years);

//4. Number Patterns
for (let i = 0; i < 5; i++) {
  console.log("12345");
}
console.log();
let str = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 0; j < i; j++) {
    str += i + "";
  }
  str += "\n";
}
console.log(str);
console.log();
let str2 = "";
for (let i = 5; i >= 1; i--) {
  for (let j = i; j >= 1; j--) {
    str2 += i + "";
  }
  str2 += "\n";
}
console.log(str2);

//5. Cost of House Down Payment
let cost = prompt("Enter cost of the house: ");
let downpayment;
if (cost > 200000) {
  downpayment = 5000 + 0.1 * (cost - 200000);
  console.log("Your downpayment would be: " + downpayment);
} else if (cost > 100000) {
  downpayment = 2000 + 0.15 * (cost - 100000);
  console.log("Your downpayment would be: " + downpayment);
} else if (cost > 50000) {
  downpayment = 1000 + 0.1 * (cost - 50000);
  console.log("Your downpayment would be: " + downpayment);
} else if (cost >= 0) {
  downpayment = 0.05 * cost;
  console.log("Your downpayment would be: " + downpayment);
} else {
  console.log("Please enter a postive number and try again.");
}

//6. Sum of digits
let integerDigits = prompt(
  "Enter an integer and I will give you the sum of its digits: "
);
let sum = 0;
function sumOfDigits(digits) {
  sum = ((digits - 1) % 9) + 1;
  console.log(sum);
}
sumOfDigits(integerDigits);
