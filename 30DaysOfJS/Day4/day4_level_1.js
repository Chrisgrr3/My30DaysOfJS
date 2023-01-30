// 1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// Enter your age: 30
// You are old enough to drive.

// Enter your age:15
// You are left with 3 years to drive.

function canDrive() {
    const age = parseInt(prompt('Enter your age:'))
    switch(true) {
        case age >= 18:
            alert('You are old enough to drive.')
            break;
        default:
            alert(`You are left with ${18 - age} years before you can drive.`)
    }
}


// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// Enter your age: 30
// You are 5 years older than me.

function whoIsOlder() {
    const myAge = 24;
    const yourAge = parseInt(prompt('Enter your age: '));
    switch(true) {
        case myAge > yourAge:
            alert(`I am ${myAge - yourAge} years older than you.`)
            break;
        case yourAge > myAge:
            alert(`You are ${yourAge - myAge} years older than me.`)
            break;
        default:
            alert('We are the same age.')
    }
}


// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

// using if else
let a = 4;
let b = 3;
if (a < b) {
    console.log(`${a} is less than ${b}.`)
} else if (b < a) {
    console.log(`${b} is less than ${a}.`)
} else {
    console.log('The numbers are the same.')
}

// ternary operator.
a < b
    ? console.log(`${a} is less than ${b}.`)
    : console.log(`${b} is less than ${a}.`)

// 4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// Enter a number: 2
// 2 is an even number

// Enter a number: 9
// 9 is is an odd number.