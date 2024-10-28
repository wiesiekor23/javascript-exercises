const fibonacci = function(fibonacciNumber) {
    let fibonacciArray = [];
    if (fibonacciNumber < 0) {
        return "OOPS"
    }
      for (i = 0; i <= fibonacciNumber; i++) {
        if (i === 0) {
          fibonacciArray.push(0);
        } else if (i === 1) {
          fibonacciArray.push(1);
        } else {
          fibonacciArray.push(fibonacciArray[i - 1] + fibonacciArray[i - 2]);
        }
      }
      return fibonacciArray[fibonacciNumber];
  };

// Do not edit below this line
module.exports = fibonacci;
