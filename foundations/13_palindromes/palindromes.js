const palindromes = function (string) {
    let left = 0;
    let right = string.length - 1;

    while (left < right) {
        while (!isAlNum(string[left])) {
            left++
        }
        while (!isAlNum(string[right])) {
            right--;
        }

        if (string[left].toLowerCase() !== string[right].toLowerCase()) {
            return false;
        }
        left++;
        right--;
    }

    return true;
};

function isAlNum(c) {
    return ("0" <= c && c <= "9" || "a" <= c && c <= "z" || "A" <= c && c <= "Z")
}

// Do not edit below this line
module.exports = palindromes;
