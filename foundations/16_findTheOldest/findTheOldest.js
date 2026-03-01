const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        let currAge;
        if (!person["yearOfDeath"]) {
            let currYear = (new Date()).getFullYear();
            currAge = currYear - person.yearOfBirth;
        } else {
            currAge = person.yearOfDeath - person.yearOfBirth;
        }
        let oldestAge;
        if (!oldest["yearOfDeath"]) {
            let currYear = (new Date()).getFullYear();
            oldestAge = currYear - oldest.yearOfBirth;
        } else {
            oldestAge = oldest.yearOfDeath - oldest.yearOfBirth;
        }

        if (currAge > oldestAge) {
            return person;
        } else {
            return oldest;
        }
    })
};

// Do not edit below this line
module.exports = findTheOldest;
