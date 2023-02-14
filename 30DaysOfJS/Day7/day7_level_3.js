// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
    // userIdGeneratedByUser()
    // 'kcsy2
    // SMFYb
    // bWmeq
    // ZXOYh
    // 2Rgxf
    // '

    // userIdGeneratedByUser()
    // '1GCSgPLMaBAVQZ26
    // YD7eFwNQKNs7qXaT
    // ycArC5yrRupyG00S
    // UbGxOFI7UXSWAyKN
    // dIV0SSUTgAdKwStr
    // '

function userIdGeneratedByUser() {
    const numberOfChars = prompt(`Please input the desired length for each user id:`)
    const numberOfIds = prompt(`How many ID's would you like to generate?`)
    let ids = [];
    let tempString = ''
    let chars = '1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let i = 0
    while(i < numberOfIds) {
        for(let j = 0; j < numberOfChars; j++) {
            tempString += chars.charAt(Math.floor(Math.random() * chars.length))
        }
        ids.push(tempString);
        tempString = '';
        i++;
    }
    let result = ids.join(`\n`)
    console.log(result)
    return result;
}


// 2. Write a function name rgbColorGenerator and it generates rgb colors.
    // rgbColorGenerator()
    // rgb(125,244,255)

function rgbColorGenerator() {
    let rgb = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
    // console.log(rgb)
    return rgb;
}
// rgbColorGenerator()


// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors(numberOfColors) {
    let hexArr = []
    const hexes = `1234567890abcdef`
    let i = 1;
    let tempString = '';
    while(i <= numberOfColors) {
        for(let j = 0; j < 6; j++) {
            tempString += hexes.charAt(Math.floor(Math.random() * hexes.length))
        }
        hexArr.push(tempString)
        tempString = ''
        i++;
    }
    // console.log(hexArr)
    return hexArr
}
// arrayOfHexaColors(2)
// arrayOfHexaColors(5)


// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors(numberOfEls) {
    let resultArr = [];
    for(let i = 0; i < numberOfEls; i++) {
        resultArr.push(rgbColorGenerator())
    }
    // console.log(resultArr)
    return resultArr;
}
// arrayOfRgbColors(1)
// arrayOfRgbColors(3)

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
   
function convertHexaToRgb(hex) {
    let colors = [];
    let start = 0
    for(let i = 0; i <= 2; i++) {
        colors.push(hex.slice(start, start + 2))
        start += 2
    }
    let rgbArray = []
    for(let i = 0; i < colors.length; i++) {
        rgbArray.push(parseInt(colors[i], 16))
    }
    let result = `rgb(${rgbArray.join(',')})`
    console.log(result)
    return result;
}
// convertHexaToRgb('a80850')
// convertHexaToRgb('212a42')

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

function convertRgbToHexa(r,g,b) {
    let rgbArray = [r,g,b];
    for(let i = 0; i < rgbArray.length; i++) {
        rgbArray[i] = rgbArray[i].toString(16)
    }
    let result = `#${rgbArray.join('')}`
    console.log(result)
    return result
}
convertRgbToHexa(133,96,111)


// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
    // console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
    // console.log(generateColors('hexa', 1)) // '#b334ef'
    // console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
    // console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'

function generateColors(type, amount) {
    let result;
    if(type.toLowerCase() === 'hexa') {
        result = arrayOfHexaColors(amount)
    } else if(type.toLowerCase() === 'rgb') {
        result = arrayOfRgbColors(amount)
    } else {
        console.log(`${type} is not a valid color format.`)
        return -1;
    }
    console.log(result)
    return result;
}
generateColors('hexa', 5)
generateColors('RgB', 3)
generateColors('rbg', 2)
generateColors('HeXA', 1)


// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length)
    let temp
    for(let i = 0; i < arr.length; i++) {
        temp = arr[i];
        arr[i] = arr[randomIndex];
        arr[randomIndex] = temp;
        randomIndex = Math.floor(Math.random() * arr.length)
    }
    console.log(arr)
}
shuffleArray([1,2,3,4,5,6,7,8,9])


// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(number) {
    let product = 1
    for(let i = 1; i <= number; i++) {
        product *= i
    }
    console.log(product)
    return product;
}
factorial(4)


// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not

function isEmpty(obj) {
    if(obj.length === 0) {
        console.log(true)
        return true
    } else {
        console.log(false)
        return false
    }
}
isEmpty('')
isEmpty([1])


// 11. Call your function sum, it takes any number of arguments and it returns the sum.

function sum() {
    let sum = 0
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum)
    return sum
}
sum(1,2,3,4,5)


// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

function sumOfArrayItems(arr) {
    let sum = 0
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] != typeof 1) {
            console.log(`${arr[i]} is not of the number type.`)
        } else {
            sum += arr[i]
        }
    }
    console.log(sum)
}
sumOfArrayItems([1,2,3,1])


// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(arr) {
    let average = 0;
    let validInts = 0;
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] != typeof 1) {
            console.log(`${arr[i]} is not of the number type.`)
        } else {
            validInts ++;
            average += arr[i]
        }
    }
    average /= validInts;
    console.log(`Average: ${average}`)
}
average([3,3,4,'hi'])
average([-1,-4,3,-10,5,1.6,4.8])


// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
    // console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
    // ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
    // console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon','Microsoft',  'IBM']);
    // ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
    // console.log(modifyArray(['Google', 'Facebook','Apple', 'Amazon']);
    //   'Not Found'

function modifyArray(arr) {
    if(arr.length < 5) {
        console.log('Not Found')
        return;
    }
    arr[4] = arr[4].toUpperCase()
    console.log(arr)
    return;
}
modifyArray([1,2,3,4,'hello'])


// 15. Write a function called isPrime, which checks if a number is prime number.

function isPrime(number) {
    if(number == 1) {
        console.log(`${number} is a prime number.`)
        return true
    }
    for(let i = 2; i < number; i++) {
        if(number % i === 0) {
            console.log(`${number} is not a prime number.`)
            return false
        }
    }
    console.log(`${number} is a prime number.`)
    return true
}
isPrime(1)
isPrime(2)
isPrime(9)
isPrime(7)


// 16. Write a functions which checks if all items are unique in the array.

function uniqueArr(arr) {
    let arrSet = new Set(arr);
    console.log(arrSet)
    if(arrSet.size == arr.length) {
        console.log('All items in the array are unique.')
    } else {
        console.log('Not all items in the array are unique.')
    }
}
uniqueArr([1,2,3,4,5,6,6])
uniqueArr([1,5,8])


// 17. Write a function which checks if all the items of the array are the same data type.

function sameDateTypes(arr) {
    let type = typeof arr[0]
    for(let i = 0; i < arr.length; i++) {
        if(typeof arr[i] != typeof type) {
            console.log('Not all values in the array are the same data type.')
            return false;
        }
    }
    console.log('All values in the array are the same data type.')
    return true;
}
sameDateTypes(['Taco', 2, 3, 'Guacamole'])
sameDateTypes(1,2,3,4)


// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

function isValidVariable(variable) {
    let chars = '~`!@#%^&*()-+={}[]|\\/:;"\'<>,.?'
    for(let i = 0; i < chars.length; i++) {
        if(variable.includes(chars.charAt(i))) {
            console.log(`${variable} is not a valid variable name.`)
            return false;
        }
    }
    console.log(`${variable} is a valid variable name.`)
    return true
}
isValidVariable('tree')
isValidVariable('*power')


// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
    // sevenRandomNumbers()
    // [(1, 4, 5, 7, 9, 8, 0)]

function sevenRandomNumbers() {
    let randomNumbers = new Set();
    let rand;
    while(randomNumbers.size < 7) {
        rand = Math.floor(Math.random() * 10);
        if(!randomNumbers.has(rand)) {
            randomNumbers.add(rand);
        }
    }
    console.log(randomNumbers)
    return randomNumbers
}
sevenRandomNumbers()


// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array