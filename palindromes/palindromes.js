const palindromes = function (string) {
    let acceptables = "abcdefghijklmnopqrstuvwxyz";
    let acceptablesArray = acceptables.split("");

    let forwardArray = string.split("");
    let reversedArray = string.split("").reverse();

    let finalForwardArray = [];
    let finalReversedArray = [];

    for (let i = 0; i < forwardArray.length; i++) {
        if (acceptablesArray.includes(forwardArray[i].toLowerCase())) {
            finalForwardArray.push(forwardArray[i]);
        }
    }

    for (let i = 0; i < reversedArray.length; i++) {
        if (acceptablesArray.includes(reversedArray[i].toLowerCase())) {
            finalReversedArray.push(reversedArray[i]);
        }
    }

    for (let i = 0; i < finalForwardArray.length; i++) {
        if (finalForwardArray[i].toLowerCase() != finalReversedArray[i].toLowerCase()) {
            console.log(finalForwardArray);
            console.log(finalReversedArray);
            return false;

        }
    }

    return true;
}



module.exports = palindromes
