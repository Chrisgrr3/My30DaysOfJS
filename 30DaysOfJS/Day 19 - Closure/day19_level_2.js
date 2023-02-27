// 1. Create a closure which has three inner functions

function doString() {
    let str = ''
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_-+={[}]|\\:;"\'?/>.<,`~'
    function addRandom () {
        str += chars.charAt(Math.floor(Math.random() * chars.length))
        return str;
    }
    function removeRandom() {
        str = str.replace(str.charAt(Math.floor(Math.random() * str.length)), '')
        return str;
    }
    function readString() {
        console.log(str)
        return str
    }
    return {
        addRandom: addRandom,
        removeRandom: removeRandom,
        readString: readString
    }
}

const innerFunctions = doString()

innerFunctions.addRandom()
innerFunctions.addRandom()
innerFunctions.addRandom()
innerFunctions.addRandom()
innerFunctions.addRandom()
innerFunctions.addRandom()
innerFunctions.addRandom()
innerFunctions.addRandom()
innerFunctions.addRandom()
innerFunctions.addRandom()
innerFunctions.readString()
innerFunctions.removeRandom()
innerFunctions.removeRandom()
innerFunctions.removeRandom()
innerFunctions.removeRandom()
innerFunctions.removeRandom()
innerFunctions.readString()
// console.log(innerFunctions.readString)