
//return console.log(splitString[0]);


const reverseString = function(string) {
    let splitString = string.split("");
    let reversedWord = "";
    for(let i = splitString.length -1 ; i >= 0 ; i--) {
        reversedWord = reversedWord + splitString[i];
    }
    return reversedWord;
};


// Do not edit below this line
module.exports = reverseString;
