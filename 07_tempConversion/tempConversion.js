const convertToCelsius = function(fahrenheitTemp) {
  let result;
  return parseFloat(((fahrenheitTemp -32) / 1.8).toFixed(1));
};

const convertToFahrenheit = function(celsiusTemp) {
  let result;
  return parseFloat(((celsiusTemp * 1.8) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
