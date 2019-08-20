let txt = require(`./chunk`);
let str = 'Widget with id';

let getRndObj = function(depth) {
    let propNumber = getRndNum();
}

let getRndVal = function() {
    let value = null;
    let type = (Math.random() <= 5) ? 0 : 1;

    if (type) return getRndNum(getRndNum(5));

    for (let i = 0; i < getRndNum(2); i++) {

    }

}

let getRndNum = function(digit) {
    return Math.round(Math.random() * Math.pow(10, digit));
}

let getSentence = function(position, txt) {
    let lastPosition = null;
    position = txt.indexOf('.', position);
    lastPosition = txt.indexOf('.', position + 1);
    return txt.slice(position + 1, lastPosition);
}

console.log(typeof(txt));
console.log(getSentence(1800, txt));
