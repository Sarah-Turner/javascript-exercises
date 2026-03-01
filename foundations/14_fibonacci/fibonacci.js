const fibonacci = function(n) {
    n = Number(n);
    if (n < 0) {
        return "OOPS";
    }

    let sequence = [0, 1];

    for (let i = 2; i <= n; i++) {
        sequence.push(sequence[i-1] + sequence[i-2]);
    }

    return sequence[n];
};

// Do not edit below this line
module.exports = fibonacci;
