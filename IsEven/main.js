let isEven = function(x) {
    if (x < 0) {
        return isEven(-x);
    } else if (x == 1) {
        return false;
    } else if (x == 0) {
        return true;
    } else {
        return isEven(x - 2);
    }
}

console.log(isEven(74));