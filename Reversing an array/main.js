let tempArray = [1, 3421, 34, 23434, 65, 76586, 25476, 34, 5673, 6767, 6, 745, 68, 7];

let bench = function(func, ...args) {
    let returnValue;
    let timeStampStart = new Date();

    for (let i = 0; i < 1000000; i++) {
         func(...args);
    }

    returnValue = func(...args);
    
    let timeStampEnd = new Date();
    console.log(timeStampEnd - timeStampStart);
    return returnValue;
}

let inverterArrays = function(arr) {
    let returnArray = [];
    for (let i = 0; i < arr.length ; i++) {
        returnArray[i] = arr[arr.length -1 - i];
    }
    return returnArray;
}

let inverterArrays2 = function(arr) {
    let temp = null;
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        temp = arr[i];
        arr[i] = arr[arr.length -1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    return arr;
}

console.log(bench(inverterArrays, tempArray));
console.log(bench(inverterArrays2, tempArray));
