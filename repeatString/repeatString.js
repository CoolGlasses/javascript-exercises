const repeatString = function(originalString, repetitions) {
    let newString = "";
    if (repetitions < 0) return "ERROR";

    for (let i = repetitions; i >= 0; i--) {
        if (i === 0) {
            return newString;
        } else {
            newString += originalString;
        }
    }
}

module.exports = repeatString
