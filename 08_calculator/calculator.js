const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce((sum, value) => sum + value, 0);
};

const multiply = function(array) {
  return array.reduce((multi, value) => multi * value, 1);
};


const power = function(number, power) {
  const array = Array(power).fill(number, 0);
  return multiply(array);
};

const factorial = function(factorial) {
  const array = [];
  for (i = factorial; i > 0; i--) {
    array.push(i);
  }
  return multiply(array);
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
