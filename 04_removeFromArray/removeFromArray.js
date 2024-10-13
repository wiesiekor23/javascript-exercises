const removeFromArray = function(array, ...input) {
    let  iter = 0;
    let arrayLength = array.length;
    let newArray = [];
    while(iter < arrayLength) {
        if(!(input.includes(array[iter]))) {
                newArray.push(array[iter]);
        }
        ++iter;
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
