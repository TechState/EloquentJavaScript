let str = require('./string1');
function conuntBeans(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'B') count++;
    }
    return count;
}

console.log(conuntBeans(str.str));
