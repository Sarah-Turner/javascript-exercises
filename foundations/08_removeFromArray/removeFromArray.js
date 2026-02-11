const removeFromArray = function(array, ...args) {
    for (let value of args) {
        while (array.includes(value)) {
            array.splice(array.indexOf(value), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
