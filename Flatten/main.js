let result = arr.reduce((previousValue, currentValue) => {
    if (previousValue.indexOf(currentValue)) return previousValue;
    return previousValue.push[currentValue];
}, [])

function loop(value, test, update, body) {
    while(test()) {
        body(value);
        update();
    }
    return value;
}