const sumAll = function(a, b) {
    let sum = 0;
    let i = 0;
    
    if (a > b && a >=0 && b >= 0 && Number.isInteger(a) && Number.isInteger(b)) {
        for(i = b ; i <= a ; i++) {
            sum += i;
        }
        return sum;
    } else if (a < b &&  a >= 0 && b >= 0 && Number.isInteger(a) && Number.isInteger(b) ) {
        for(i = a ; i <= b ; i++) {
            sum += i;
        }
        return sum;
    } else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;
