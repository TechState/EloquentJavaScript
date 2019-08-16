function remove(arr, index) {
    return arr.slice(0, index)
        .concat(arr.slice(index + 1));
}
console.log(remove(["a", "b", "c", "d", "e"], 2));
