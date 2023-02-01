// 1. Declare an empty array;

let emptyArr = [];

// 2. Declare an array with more than 5 number of elements

let fiveEl = [3, 5, 6, 8, 9]
console.log(fiveEl)

// 3. Find the length of your array

console.log(fiveEl.length);

// 4. Get the first item, the middle item and the last item of the array

console.log(fiveEl[0], fiveEl[fiveEl.length - 1], fiveEl[Math.floor(fiveEl.length / 2)])

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes = [1, 'taco', true, 'cheese', 8, false]
console.log(mixedDataTypes.length)

// 6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7. Print the array using console.log()

console.log(itCompanies)

// 8. Print the number of companies in the array

console.log(itCompanies.length);

// 9. Print the first company, middle and last company

console.log(itCompanies[0], itCompanies[Math.floor(itCompanies.length/2)], itCompanies[itCompanies.length - 1]);

// 10. Print out each company

itCompanies.forEach((company) => {
    console.log(company)
});

// 11. Change each company name to uppercase one by one and print them out

itCompanies.forEach((company) => {
    console.log(company.toUpperCase())
})

// 12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

let lastEl = itCompanies.length - 1;
let string1 = itCompanies.slice(0, lastEl).join(', ')
console.log(string1.concat(` and ${itCompanies[lastEl]} are big IT companies.`))

// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

function included(company) {
    itCompanies.includes(company) ? console.log(company) : console.log(`${company} is not found in this array.`);
}
included('Amazon');

// 14. Filter out companies which have more than one 'o' without the filter method

// 15. Sort the array using sort() method

console.log(itCompanies.sort())

// 16. Reverse the array using reverse() method

console.log(itCompanies.reverse())

// 17. Slice out the first 3 companies from the array

console.log(itCompanies.slice(0,3));

// 18. Slice out the last 3 companies from the array

console.log(itCompanies.slice(itCompanies.length - 3, itCompanies.length))

// 19. Slice out the middle IT company or companies from the array

console.log(itCompanies.slice(Math.floor(itCompanies.length/2), Math.ceil(itCompanies.length/2)))

// 20. Remove the first IT company from the array

let firstElement = itCompanies.shift()
console.log(itCompanies)

// 21. Remove the middle IT company or companies from the array

if(itCompanies.length%2 != 0) {
    console.log(itCompanies.slice(Math.floor(itCompanies.length/2, Math.ceil(itCompanies.length/2))))
} else {
    console.log(itCompanies.slice(itCompanies.length/2 - 1, itCompanies.length/2 + 1));
}

// 22. Remove the last IT company from the array

console.log(itCompanies.pop())
console.log(itCompanies)

// 23. Remove all IT companies