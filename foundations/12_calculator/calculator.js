const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
	return arr.reduce((sum, currValue) => sum + currValue, 0);
};

const multiply = function(arr) {
  return arr.reduce((prod, currValue) => prod * currValue, 1);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(n) {
	let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
