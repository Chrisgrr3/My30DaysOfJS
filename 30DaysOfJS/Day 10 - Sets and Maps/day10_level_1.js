const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// 1. create an empty set

let emptySet = new Set()


// 2. Create a set containing 0 to 10 using loop

let numSet = new Set()
for(let num = 0; num <= 10; num++) {
    numSet.add(num)
}
console.log(numSet)


// 3. Remove an element from a set

numSet.delete(10);
console.log(numSet)


// 4. Clear a set

let setArr = [1,2,5,6,8,10,59,'hi']
let mySet = new Set(setArr)
console.log(mySet)
mySet.clear()
console.log(mySet)


// 5. Create a set of 5 string elements from array

const stringArr = ['', 'hi', 'bye', 'taco', 'BELL']
const stringSet = new Set(stringArr)


// 6. Create a map of countries and number of characters of a country

const countryMap = new Map()
countries.forEach((country) => countryMap.set(country, country.length))
console.log(countryMap)