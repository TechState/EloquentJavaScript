let range = function(firstIndex, lastIndex, ...gap) {
    let step = 1;
    if (gap[0]) step = gap[0];
    let arr = [];
    if ((firstIndex > lastIndex && step > 0) || 
        (firstIndex < lastIndex && step < 0)) {
            step = -step;
        }

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
