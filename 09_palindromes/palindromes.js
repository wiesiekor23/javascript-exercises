const palindromes = function (string) {
    const splitString = string.split("");
    const word = returnString(splitString);
    const reversedWord = returnReversedString(splitString);

    if (word === reversedWord) {
        return true;
    }
    return false;
};

function isLetter(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}

function returnString(string) {
    const newString = [];
    for (i = 0; i <= string.length; i++) {
        if (isLetter(string[i])) {
            newString.push(string[i]);
        }
    }
    return newString.join("").toLowerCase();
}

function returnReversedString(string) {
    const newString = [];
    for (i = string.length; i >= 0; i--) {
        if (isLetter(string[i])) {
            newString.push(string[i]);
        }
    }
    return newString.join("").toLowerCase();

}

// Do not edit below this line
module.exports = palindromes;
