// 1. Create a closure which has one inner function

function addRandomToArray() {
    let arr = [];
    function addRandom() {
        arr.push(Math.floor(Math.random() * 101))
        return arr
    }
    return addRandom
}

const innerRandom = addRandomToArray();

console.log(innerRandom())
console.log(innerRandom())
console.log(innerRandom())