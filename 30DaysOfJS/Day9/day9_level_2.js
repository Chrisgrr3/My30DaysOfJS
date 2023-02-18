const { products } = require("./day9_level_1")
const { countries } = require('../Day8/countries')

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const totalPrice = products.filter((product) => typeof product.price === 'number').reduce((acc, cur) => acc + cur.price, 0);
console.log(totalPrice)


// 2. Find the sum of price of products using only reduce reduce(callback))

const reducePrice = products.reduce((acc, cur) => {
    if(typeof cur.price == 'number') {
        return acc += cur.price;
    }
    return acc; // Ensure to return accumulator if no additions occur.
}, 0)
console.log(reducePrice)


// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

const categorizeCountries = countries.filter((country) => country.languages.includes('French'))
// console.log(categorizeCountries)


// 4. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

const getFirstTenCountries = () => {
    let firstTen = [];
    for(let i = 0; i < 10; i++) {
        firstTen.push(countries[i])
    }
    return firstTen
}
console.log(getFirstTenCountries())


// 5. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

const getLastTenCountries = () => {
    let lastTen = []
    for(let i = countries.length - 1; i > countries.length - 11; i--) {
        lastTen.push(countries[i])
    }
    return lastTen
}
// console.log(getLastTenCountries())


// 6. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)

