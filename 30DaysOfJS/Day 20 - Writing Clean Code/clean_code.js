// Modeled after the Airbnb JS Style Guide

// Variables: use let and const, no var
let firstName = 'Chris'
let lastName = 'Guerrero'
let age = 250

const pi = Math.PI
const gravity = 9.81



// Arrays: declare using const and make array name plural.
const numbers = [1,2,3,4,5,6]
const letters = ['a','b','c']



// Objects: Use literal syntax for object creation.
const person = {
    firstName: 'Chris',
    lastName:'Guerrero',
    age: 250,

    // Use Object method shorthand
    addToAge(num) {
        return person.age + num
    }
}

// Use property value shorthand
const car = 'Mercedes'
const slowCar = 'Tractor'
// bad:
const badCarObj = {
    car: car
}
//good
const goodCarObj = {
    // Group shorthand properties at beginnning of object declaration
    car,
    slowCar,
    fastCar: 'Lamborghini'
    
}

// Only quote properties that are invalid identifiers
const myObj = {
    foo: 3,
    bar: 4,
    'bad-name': 5
}

// Don't call Object.prototype methods directly, such as hasOwnProperty, propertyIsEnumerable, and isPrototypeOf
// bad
console.log(myObj.hasOwnProperty('foo'))
//good
const has = Object.prototype.hasOwnProperty; // cache the lookup once in module scope
console.log(has.call(myObj, 'foo'))

// Prefer object spread syntax over Object.assign to shallow-copy objects. Use object rest parameter
// syntax to get a new object with certain properties omitted.
// horrible
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c:3 }); // Mutates the 'original'
// bad
const og = { a: 1, b: 2};
const ogCopy = Object.assign({}, og, { c: 3 })
// good
const goodOg = { a: 1, b: 2 }
const goodOgCopy = {...goodOg, c: 3 }
const { a, ...noA } = goodOgCopy