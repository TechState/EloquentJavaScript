let txt = require('./chunk');

let getRndObj = function(depth) {
    if (!depth) return;
    let newObj = {};
    let propNumber = getRndNum(1);
    for (let i = 0; i < propNumber; i++) {
        newObj[getRndSntnc(txt)] = (getRndNum(1) > 5) ? getRndObj(depth - 1) : getRndVal(); 
    }
    return newObj;
}

let getRndVal = function() {
    if (getRndNum(1) > 5) return getRndNum(5);
        else return getRndSntnc(txt);
}

let getRndNum = function(digit) {
    return Math.round(Math.random() * Math.pow(10, digit));
}

let getRndSntnc = function(txt) {
    return getSentence(getRndNum(5), txt);
}

let getSentence = function(startPosition, txt) {
    let lastPosition = null;
    startPosition = txt.indexOf(' ', startPosition);
    lastPosition = txt.indexOf(' ', startPosition +1);
    return txt.slice(startPosition + 1, lastPosition);
}


let cloneObj = function(obj) {
    let newObj = {};
    for (let key in obj) {
        newObj[key] = obj[key];
    }
    return newObj;
}

module.exports.getRndObj = getRndObj;
module.exports.cloneObj = cloneObj;

