const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]


// 1. Explain the difference between forEach, map, filter, and reduce.

    // The forEach method is used only on arrays and takes a callback function with element, index, and arr parameters, with the latter two
    // being optional. It is used to iterate through the array elements and perform some sort of action on each element, such as console.log
    // Example:
        numbers.forEach((number) => console.log(number))

    // The map method iterates over array elements and modifies each element. Takes element, index, and array parameters
    // and returns a new array.
    // Example:
        const newNumbers = numbers.map((number) => number + number)
        console.log(newNumbers)

    // The filter method filters out items that fulfill filtering conditions and returns a new array.
    // Example:
        const greaterThan5 = numbers.filter((number) => number > 5);
        console.log(greaterThan5)

    // The reduce method takes a callback function, which takes an accumulator, current, and optional initial
    // value as a parameter and returns a single value. The accumulator essentially iterates through the array
    // and adds each value (as seen in example below). When we specify an initial value as the second parameter
    // to the reduce function, this value will be the accumulator's initial value at the start of the function.
    // Example:
        const sum = numbers.reduce((acc, cur) => acc + cur, 5) // Should return 60
        console.log(sum)


// 2. Define a callback function before you use it in forEach, map, filter or reduce.

    // A callback function is a function that is passed into another function as a parameter.
    // Example:
        // const printNums = numbers.forEach((number) => {
        //     console.log(number)
        // })


// 3. Use forEach to console.log each country in the countries array.

countries.forEach((country) => console.log(country))


// 4. Use forEach to console.log each name in the names array.

names.forEach((n) => console.log(n))


// 5. Use forEach to console.log each number in the numbers array.

numbers.forEach((number) => console.log(number))


// 6. Use map to create a new array by changing each country to uppercase in the countries array.

const capCountries = countries.map((country) => country.toUpperCase())
console.log(capCountries)


// 7. Use map to create an array of countries length from countries array.

const countryLengths = countries.map((country) => country.length)
console.log(countryLengths)


// 8. Use map to create a new array by changing each number to square in the numbers array

const squareNumbers = numbers.map((number) => number * number)
console.log(squareNumbers)


// 9. Use map to change to each name to uppercase in the names array

const upperNames = names.map((n) => n.toUpperCase())
console.log(upperNames)


// 10. Use map to map the products array to its corresponding prices.

const prodPrices = products.map((product) => `Product: ${product.product} | Price: ${product.price}`)
console.log(prodPrices)


// 11. Use filter to filter out countries containing land.

const landCountries = countries.filter((country) => {
    return country.toLowerCase().includes('land')
})
console.log(landCountries)


// 12. Use filter to filter out countries having six character.

const sixChars = countries.filter((country) => country.length === 6)
console.log(sixChars)


// 13. Use filter to filter out countries containing six letters and more in the country array.

const sixOrMore = countries.filter((country) => country.length >= 6)
console.log(sixOrMore)


// 14. Use filter to filter out country start with 'E';

const startsWithE = countries.filter((country) => country.startsWith('E'))
console.log(startsWithE)


// 15. Use filter to filter out only prices with values.

const onlyPriced = products.filter((prod) => typeof prod.price == 'number')
console.log(onlyPriced)


// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const getStringLists = arr => {
    return arr.filter((el) => typeof el == 'string')
}

console.log(getStringLists([1,2,'e','hi',4,'u']))

// 17. Use reduce to sum all the numbers in the numbers array.

const sumNums = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sumNums)


// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries

const sentence = countries.reduce((acc, cur) => {
    if(cur == 'IceLand') {
        return acc += `and ${cur} are north European countries`
    } else {
        return acc += cur.concat(', ');
    }
},'')
console.log(sentence)


// 19. Explain the difference between some and every

    // Every checks if all elements are similar in one aspect while some checks 
    // if some of the elements are similar in one aspect. Both return a boolean


// 20. Use some to check if some names' length greater than seven in names array

const someGreaterThan7 = names.some((n) => n.length > 7)
console.log(someGreaterThan7)


// 21. Use every to check if all the countries contain the word land

const allLand = countries.every((country) => country.toLowerCase().includes('land'))
console.log(allLand)


// 22. Explain the difference between find and findIndex.

    // find returns the first element that satisfies a condition while findIndex returns the index of the first
    // element that satisfies the condition.


// 23. Use find to find the first country containing only six letters in the countries array

const first6 = countries.find((country) => country.length == 6)
console.log(first6)


// 24. Use findIndex to find the position of the first country containing only six letters in the countries array

const first6Index = countries.findIndex((country) => country.length == 6)
console.log(first6Index)


// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

const norway = countries.findIndex((country) => country == 'Norway')
console.log(norway)


// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const russia = countries.findIndex((country) => country == 'Russia')
console.log(russia)