// 1. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
    // Enter base: 20
    // Enter height: 10
    // The area of the triangle is 100

function triangleArea () {
    const base = prompt('What is the base length of the triangle?');
    const height = prompt('What is the height of the triangle?');
    const area = .5 * base * height;
    alert(`The area of your triangle is ${area}.`)
}
// triangleArea();


// 2. Write a script that prompt the user to enter side a, side b, and side c of the triangle and calculate the perimeter of triangle (perimeter = a + b + c)
    // Enter side a: 5
    // Enter side b: 4
    // Enter side c: 3
    // The perimeter of the triangle is 12

function trianglePerimeter () {
    const sideA = prompt("Input the length of side a of the triangle.")
    const sideB = prompt("Input the length of side b of the triangle.")
    const sideC = prompt("Input the length of side c of the triangle.")
    const perimeter = parseInt(sideA) + parseInt(sideB) + parseInt(sideC);
    alert(`The perimeter of your triangle is ${perimeter}.`)
}
// trianglePerimeter();


// 3. Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

function rectangle () {
    function toInt(x) {
        return parseInt(prompt(x))
    }
    function rectArea(length, width) {
        return (length * width)
    }
    function rectPeri(length, width) {
        return ((2*length) + (2*width))
    }
    const length = toInt('Input the length of your rectangle.')
    const width = toInt('Input the width of your rectangle.')
    const area = rectArea(length, width);
    const perimeter = rectPeri(length, width);
    alert(`The area of your rectangle is ${area} and the perimeter is ${perimeter}.`)
}
// rectangle();


// 4. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

function circle () {
    function toInt(x) {
        return parseInt(prompt(x))
    }
    function area(radius) {
        return (Math.pow(radius , 2) * Math.PI)
    }
    function circumference(radius) {
        return (2 * radius * Math.PI)
    }
    const radius = toInt('What is the radius of your circle?')
    alert(`The area of your circle is ${area(radius)} and the circumference is ${circumference(radius)}.`)
}
// circle();


// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2

console.log(`The slope is 2`)
console.log('The x-intercept is 1')
console.log('The y-intercept is -2')


// 6. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

function findSlope(x1, y1, x2, y2) {
    return((y2 - y1)/(x2 - x1))
}
console.log(findSlope(2,2,6,10))


// 7. Compare the slope of above two questions.
console.log(2 === findSlope(2,2,6,10));


// 8. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
    // Enter hours: 40
    // Enter rate per hour: 28
    // Your weekly earning is 1120

function pay() {
    function toInt(x) {
        return parseInt(prompt(x))
    }
    function payCheck(hours, rate) {
        return hours * rate;
    }
    const hours = toInt('How many hours do you work per week?')
    const rate = toInt('What is your hourly pay?')
    alert(`Your weekly pay for working ${hours} hours at \$${rate} per hour is \$${payCheck(hours, rate)}.`)
}
// pay();


// 9. If the length of your name is greater than 7 say, your name is long else say your name is short.

function nameLength() {
    let name = prompt('What is your first name?')
    if(name.length > 7) {
        alert('Your name is long!')
    }
    else {
        alert('Your name is short.')
    }
}
// nameLength();


// 10. Compare your first name length and your family name length and you should get this output.
    // let firstName = 'Christopher'
    // let lastName = 'Guerrero'
    // Expected result: 'Your first name, Chris is longer than your family name, Guerrero'

function longer() {
    const firstName = prompt('What is your first name?')
    const lastName = prompt('What is your family name?')
    if(firstName.length > lastName.length) {
        alert(`Your first name, ${firstName} is longer than your family name, ${lastName}.`)
    }
    else if (firstName.length == lastName.length){
        alert(`Your first name, ${firstName} is the same length as your family name, ${lastName}.`)
    }
    else {
        alert(`Your first name, ${firstName} is shorter than your family name, ${lastName}.`)
    }
}
// longer();


// 11.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
    // let myAge = 250
    // let yourAge = 25
    // Expected result: 'I am 225 years older than you.'
function ageComparison(age1, age2) {
    const myAge = age1; const yourAge = age2;
    if(myAge > yourAge) {
        console.log(`I am ${myAge - yourAge} years older than you.`)
    } else if (yourAge > myAge) {
        console.log(`You are ${yourAge - myAge} years older than me.`)
    } else {
        console.log(`We are the same age: ${myAge}`)
    }
}
ageComparison(250, 25);


// 12. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
    // Enter birth year: 1995
    // You are 25. You are old enough to drive

    // Enter birth year: 2005
    // You are 15. You will be allowed to drive after 3 years.
function canDrive() {
    function toInt(res) {
        return parseInt(prompt(res))
    }
    const birthYear = toInt('What is your birth year?')
    let today = new Date();
    const thisYear = today.getFullYear();
    const age = thisYear - birthYear;
    if(age >= 18) {
        alert(`You are ${age}. You are old enough to drive.`)
    } else {
        alert(`You are ${age}. You will be allowed to drive after ${18 - age} years.`)
    }
}


// 13. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
    // Enter number of years you live: 100
    // You lived 3153600000 seconds.

function yearsInSeconds() {
    const years = parseInt(prompt(`Input a number of years.`))
    const seconds = (years*365*24*60*60);
    alert(`The are ${seconds} seconds in ${years} years.`)
}


// 14. Create a human readable time format using the Date time object

let date = new Date();
let year = date.getFullYear().toString();
let month = date.getMonth() + 1;
let day = date.getDate().toString();
let hour = date.getHours().toString();
let minutes = date.getMinutes().toString();
if(month < 10) {
    month = '0'.concat(month);
}
if(minutes < 10) {
    minutes = '0'.concat(minutes);
}

    // YYYY-MM-DD HH:mm
    console.log(`${year}-${month}-${day} ${hour}:${minutes}`)

    // DD-MM-YYYY HH:mm
    console.log(`${day}-${month}-${year} ${hour}:${minutes}`)

    // DD/MM/YYYY HH:mm
    console.log(`${day}/${month}/${year} ${hour}:${minutes}`)
