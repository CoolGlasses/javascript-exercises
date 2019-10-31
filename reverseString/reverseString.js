const reverseString = function(originalString) {
    let finalArray = [];
    let firstArray = [];
    firstArray = originalString.split("");
    finalArray = firstArray.reverse();
    return finalArray.join("");
}

module.exports = reverseString
