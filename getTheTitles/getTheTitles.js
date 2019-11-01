const getTheTitles = function(arrayOfHashes) {
    let finalArray = [];

    for (let i = 0; i < arrayOfHashes.length; i++) {
        let hash = arrayOfHashes[i];
        finalArray.push(hash.title);
    }

    return finalArray;
}

module.exports = getTheTitles;
