function outerFunction() {
    let count = 0
    function innerFunction() {
        count++
        return count
    }

    return innerFunction
}
const innerFunc = outerFunction()

console.log(innerFunc())
console.log(innerFunc())
console.log(innerFunc())

// In the code above, each time the innerFunc() function is called, the count defined in outerFunction() is incremented.


function anotherOuterFunction() {
    let count = 0;
    function plusOne() {
        count++
        return count
    }
    function minusOne() {
        count--
        return count
    }
    return {
        plusOne:plusOne(),
        minusOne:minusOne()
    }
}
const innerFuncs = anotherOuterFunction()

console.log(innerFuncs.plusOne)
console.log(innerFuncs.minusOne)