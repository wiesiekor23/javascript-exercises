const findTheOldest = function(array) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    array.sort((a, b) => ((b.yearOfDeath || currentYear) - b.yearOfBirth) - ((a.yearOfDeath || currentYear) - a.yearOfBirth))
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;