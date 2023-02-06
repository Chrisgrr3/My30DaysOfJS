// 1. Copy countries array(Avoid mutation)

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

// 2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

let copyArr = [];

for(const el in countries) {
    copyArr.push(countries[el])
}
copyArr.sort()


// 3. Sort the webTechs array and mernStack array

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ].sort()
const mernStack = [
    'MongoDB', 'Express', 'React', 'Node'
].sort()
console.log(webTechs, mernStack)

// 4. Extract all the countries contain the word 'land' from the countries array and print it as array



// 5. Find the country containing the hightest number of characters in the countries array



// 6. Extract all the countries contain the word 'land' from the countries array and print it as array



// 7. Extract all the countries containing only four characters from the countries array and print it as array



// 8. Extract all the countries containing two or more words from the countries array and print it as array



// 9. Reverse the countries array and capitalize each country and stored it as an array