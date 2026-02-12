const sumAll = function(firstValue, secondValue) {
    // check for negatives, floating points, and non-numbers to return "ERROR"
    if (typeof firstValue !== "number" || typeof secondValue !== "number") {
        return "ERROR";
    }
    if (firstValue < 0 || secondValue < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(firstValue) || !Number.isInteger(secondValue)) {
        return "ERROR";
    }
    let start = (firstValue < secondValue) ? firstValue : secondValue;
    let end = (firstValue > secondValue) ? firstValue : secondValue;
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum += i;
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
