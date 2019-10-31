const sumAll = function(first, last) {
    let finalSum = 0;
    let realFirst = first;
    let realLast = last;

    if (typeof(first) != "number" || typeof(last) != "number" || first < 0 || last < 0) {
        return "ERROR";
    }
    if (first > last) {
        realFirst = last;
        realLast = first;
    }
    for ( let i = realFirst; i <= realLast; i++) {
        finalSum += i;
    }

    return finalSum;

}

module.exports = sumAll
