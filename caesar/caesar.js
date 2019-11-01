const caesar = function(string, shift) {
    let base = "abcdefghijklmnopqrstuvwxyz";
    let baseArray = base.split("");
    let stringArray = string.split("");
    let finalArray = [];

    for (let i = 0; i < stringArray.length; i++) {
        let originalPosition = baseArray.indexOf(stringArray[i].toLowerCase());
        let newPosition = originalPosition + shift;
        
        if ( newPosition > 25 ) {
            newPosition = newPosition % 26;
        }

        if (newPosition < 0) {
            newPosition = 26 + newPosition;
        }


        if (stringArray[i] == stringArray[i].toLowerCase()) { //If it's lowercase
            if (baseArray.includes(stringArray[i].toLowerCase())) { //If its in the Base Array
                finalArray.push(baseArray[newPosition]);
            } else {
                finalArray.push(stringArray[i]);
            }
        } else { //If it's Uppercase
            if (baseArray.includes(stringArray[i].toLowerCase())) { //If its in the Base Array
                finalArray.push(baseArray[newPosition].toUpperCase());
            } else {
                finalArray.push(stringArray[i]);
            }
        }


    }

    
    return finalArray.join("");
}

module.exports = caesar
