let getRndObj = require('../libraries/objects generator').getRndObj;
let cloneObj = require('../libraries/objects generator').cloneObj;

let obj = getRndObj(5);
let obj2 = cloneObj(obj);
//let obj2 = getRndObj(5);

let deepCompare = function(obj, obj2) {
    for (let key in obj) {
        if (typeof(obj[key]) == Object && obj[key] != null) deepCompare(obj[key], obj2[key]);
            else if (obj[key] != obj2[key]) return false;
    }
    return true;
}

for (let i = 0; i < 10; i++) {
    console.log(deepCompare(obj, obj2));
}

obj = {here: {is: "an"}, object: 2};
obj2 = {here: 1, object: 2};

console.log(deepCompare(obj, obj2));


