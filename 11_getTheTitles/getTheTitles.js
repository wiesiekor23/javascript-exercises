const getTheTitles = function(array) {
    const newArray = [];
    array.map(obj => newArray.push(obj.title));
    return newArray;
};

// Do not edit below this line
module.exports = getTheTitles;
