const fibonacci = function (num) {
    let fibArray = [0, 1];

    if (num < 0) {
        return "OOPS";
    }

    if (num == 1) {
        return fibArray[1];
    }

    for (let i = 1; i <= num; i++) {
        let nextNum = fibArray[i - 1] + fibArray[i];
        fibArray.push(nextNum);
    }

    console.log(fibArray);
    return fibArray[num];


}

module.exports = fibonacci
