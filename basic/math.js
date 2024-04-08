function sum(a, b) {
    return a+b;
}

function max(a, b) {
    return a > b ? a : b;
}

function min(a, b) {
    return a < b ? a : b;
}

function diff(a, b) {
    const res = a - b;
    return res < 0 ? (res * -1) : res;    
}

function factors(number) {
    const facs = [];
    for (let i = 1; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            facs.push(i);
            if (i !== number / i) {
                facs.push(number / i);
            }
        }
    }
    return facs;
}

module.exports = {
    sum,
    max,
    min,
    diff,
    factors
}