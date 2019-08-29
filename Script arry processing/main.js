const SCRIPTS  = require('./scripts');
const string = require('./string').string;

function characterScript(code) {
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
            return script;
        }
    }
}

let getCharacter = function(string) {
    let out = [];
    for (let char of string) {
        characterScript(char)
    }
    return out;
}

let 
// console.log(getCharacter(string));
// console.log(SCRIPTS);
// console.log('a');
