let range = function(firstIndex, lastIndex, ...gap) {
    let step = 1;
    if (gap) step = gap;
    let arr = [];
    if (firstIndex > lastIndex) step = -step;
    for (let i = firstIndex; i * step <= lastIndex * step; i += step) {
        arr.push(i);
    }
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
