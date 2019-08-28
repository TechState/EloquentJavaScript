const SCRIPTS  = require('./scripts');
const string = require('./string').string;

let getCharacter = function(string) {
    let out = [];
    for (let char of string) {
        out.push(char.codePointAt(0));
    }
    return out;
}

console.log(getCharacter(string));
// console.log(SCRIPTS);
console.log('a');
