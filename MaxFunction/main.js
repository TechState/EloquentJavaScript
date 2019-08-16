let maxOfNumbers = function(...nums) {
    let result = nums[0];

    for (let num of nums) {
        if (num > result) result = num;
    }

    return result;
}

console.log(maxOfNumbers(1, 2, 3, 4, -43, 534, 3, 0));
