const repeatString = function(string, num) {
    let word = "";
    if (num >= 0) {
    for(i = 0; i < num; i++) {
        word = word + string;
    }
    return word;
} else {
    return "ERROR"
}
};

repeatString

// Do not edit below this line
module.exports = repeatString;
