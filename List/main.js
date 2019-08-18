let arrayOfNumbers = [1, 2, 3, 4, 5, 6, 7];

let arrayToList = function(arr) {
    let next = null;
    for (let i = arr.length -1; i >= 0; i--) {
        next = {val: arr[i], next: next};
    }
    return next;
}

let listToArray = function(list) {
    let arr = [];
    while (list) {
        arr.push(list.val);
        list = list.next;
    }
    return arr;
}

let prepend = function(val, list) {
    return {val: val, next: list};
}

let nth = function(index, list) {
    for (let i = 0; i < index; i++) {
        list = list.next;
    }
    return list.val;
}

let a = arrayToList(arrayOfNumbers);
let arr = listToArray(a);
let aaa = 0;
console.log(nth(6, a));

