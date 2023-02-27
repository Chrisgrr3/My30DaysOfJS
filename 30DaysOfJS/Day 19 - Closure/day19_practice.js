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