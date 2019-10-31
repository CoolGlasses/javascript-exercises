const removeFromArray = function(originalArray, ...elementsToRemove) {
    let firstArray = originalArray;
    let finalArray = [];
    for (let i = 0; i < elementsToRemove.length; i++) {
        if (originalArray.includes(elementsToRemove[i])) {
            firstArray = firstArray.filter( ele => ele !== elementsToRemove[i]);
        }
    }
    finalArray = firstArray;
    return finalArray;
}

module.exports = removeFromArray
