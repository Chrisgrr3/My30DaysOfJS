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

// 8. Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.

// 9. Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
    // Enter hours: 40
    // Enter rate per hour: 28
    // Your weekly earning is 1120

// 10. If the length of your name is greater than 7 say, your name is long else say your name is short.

// 11. Compare your first name length and your family name length and you should get this output.
    // let firstName = 'Christopher'
    // let lastName = 'Guerrero'
    // Expected result: 'Your first name, Chris is longer than your family name, Guerrero'

// 12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
    // let myAge = 250
    // let yourAge = 25
    // Expected result: 'I am 225 years older than you.'

// 13. Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
    // Enter birth year: 1995
    // You are 25. You are old enough to drive

    // Enter birth year: 2005
    // You are 15. You will be allowed to drive after 3 years.

// 14. Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
    // Enter number of years you live: 100
    // You lived 3153600000 seconds.

// 15. Create a human readable time format using the Date time object
    // YYYY-MM-DD HH:mm
    // DD-MM-YYYY HH:mm
    // DD/MM/YYYY HH:mm