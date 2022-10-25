// perform subset operation
// true if all elements of set b is in set a
function subset(setA, setB) {
    for (let i of setB) {
        if (!setA.has(i)) {
            return false
        }
    }
    return true
}

// two sets of fruits
const setA = new Set(['apple', 'mango', 'orange']);
const setB = new Set(['apple', 'orange']);

const result = subset(setA, setB);

console.log(result);