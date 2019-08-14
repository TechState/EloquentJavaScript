let str = require('./string.js');

function conuntChar(str, ch) {
    let conunt = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == ch) conunt++;
    }
    return conunt;
}

console.log(conuntChar(str.str, 'a'));