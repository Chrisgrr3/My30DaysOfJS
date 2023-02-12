// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// function solveLinEquation(a, b, c) {

// }


// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

    // console.log(solveQuadratic()) // {0}
    // console.log(solveQuadratic(1, 4, 4)) // {-2}
    // console.log(solveQuadratic(1, -1, -2)) // {2, -1}
    // console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
    // console.log(solveQuadratic(1, 0, -4)) //{2, -2}
    // console.log(solveQuadratic(1, -1, 0)) //{1, 0}

function solveQuadEquation(a = 0, b = 0, c = 0) {
    if(a === 0) {
        console.log('This is not a quadratic equation');
        return 0;
    }
    let x = (-b + Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a)
    let x2 = (-b - Math.sqrt(Math.pow(b,2) - (4*a*c)))/(2*a)
    return `(${x}, ${x2})`
}
console.log(solveQuadEquation(1, 4, 4));
// console.log(solveQuadEquation(1, -1, -2));
// console.log(solveQuadEquation(1, 7, 12));
// console.log(solveQuadEquation(1, 0, -4));
// console.log(solveQuadEquation(1, -1, 0));


// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(arr) {
    if(typeof arr != typeof []) {
        console.log('Please input an array.')
    }
    for(let i = 0; i < arr.length; i++) {
        console.log(arr[i])
    }
}
printArray([1,2,4,5,7,43])


// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

    // showDateTime()
    // 08/01/2020 04:08

function showDateTime() {
    let now = new Date();
    let month = (function(n) {
        return n.getMonth() + 1
    })(now); // month(today)
    let date = n => {
        return n.getDate()
    } // date(now)
    let hours = n => n.getHours(); // hours(now)
    let minutes = n => n.getMinutes() // minutes(now)
    let year = (function(n) {
        return n.getFullYear()
    })(now)
    console.log(`${month < 10 ? '0' + month : month}/${date(now) < 10 ? '0' + date(now): date(now)}/${year} ${hours(now) < 10 ? '0' + hours(now) : hours(now)}:${minutes(now) < 10 ? '0' + minutes(now): minutes(now)}`) 
}
showDateTime()


// 5. Declare a function name swapValues. This function swaps value of x to y.
    // swapValues(3, 4) // x => 4, y=>3
    // swapValues(4, 5) // x = 5, y = 4

function swapValues(x, y) {
    let temp = x;
    x = y;
    y = temp;
    console.log(x, y)
}
swapValues(1, 2)


// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
    // console.log(reverseArray([1, 2, 3, 4, 5]))
        //[5, 4, 3, 2, 1]
    // console.log(reverseArray(['A', 'B', 'C']))
        //['C', 'B', 'A']

function reverseArray(arr) {
    let reverseArr = []
    for(let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i])
    }
    console.log(reverseArr)
    return reverseArr;
}
reverseArray([1,2,3,5,7])


// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(arr) {
    let capitalized;
    const capitalizedArray = [];
    for(let i = 0; i < arr.length; i++) {
        capitalized = arr[i].charAt(0).toUpperCase()
        capitalizedArray.push(capitalized.concat(arr[i].slice(1, arr[i].length)))
    }
    console.log(capitalizedArray)
}
capitalizeArray(['hi', 'hello','dude'])


// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

let items = []
function addItem(item) {
    items.push(item)
    console.log(items)
    return items;
}
addItem('Cereal')
addItem('Cheese')


// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function removeItem(itemIndex) {
    items.splice(itemIndex, 1)
}
removeItem(0);
console.log(items)


// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(number) {
    let sum = 0;
    for(let i = 0; i <= number; i++) {
        sum += i;
    }
    console.log(sum)
}
sumOfNumbers(3)
sumOfNumbers(100)
sumOfNumbers(1)


// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.



// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.



// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
    // evensAndOdds(100);
    // The number of odds are 50.
    // The number of evens are 51.



// 14. Write a function which takes any number of arguments and return the sum of the arguments
    // sum(1, 2, 3) // -> 6
    // sum(1, 2, 3, 4) // -> 10



// 15. Write a function which generates a randomUserIp.



// 16. Write a function which generates a randomMacAddress



// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
    // console.log(randomHexaNumberGenerator());
    // '#ee33df'



// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
    // console.log(userIdGenerator());
    // 41XTDbE