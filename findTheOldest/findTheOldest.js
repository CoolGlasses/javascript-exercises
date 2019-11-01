let findTheOldest = function(arrayOfHashes) {
    let personOfInterest;
    let oldestAge = 0;

    for (let i = 0; i < arrayOfHashes.length; i++) {
        let hash = arrayOfHashes[i];
        let age = 0;

        if (hash.yearOfDeath == undefined) {
            let currentDate = new Date();
            age = currentDate.getFullYear() - hash.yearOfBirth;
        } else {
            age = hash.yearOfDeath - hash.yearOfBirth;
        }

        if (oldestAge < age) {
            oldestAge = age;
            personOfInterest = hash;
        }
    }

    return personOfInterest;

}

module.exports = findTheOldest
