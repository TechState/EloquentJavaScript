let range = function(firstIndex, lastIndex, step) {
    let arr = [];
    let increment = (step) ? Math.abs(step) : 1;

    if (firstIndex > lastIndex) {
        firstIndex = -firstIndex;
        lastIndex = -lastIndex;
    }

    for (let i = firstIndex; i <= lastIndex; i += increment) arr.push(i);

    return arr;
}

let sum = function(arr) {
    let sum = 0;
    for (let item of arr) {
        sum += item;
    }
    return sum;
}

module.exports.range = range;
module.exports.sum = sum;
