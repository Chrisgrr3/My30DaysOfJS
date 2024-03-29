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

let landArray = []
for(let i = 0; i < copyArr.length; i++) {
    if(copyArr[i].includes('land')) {
        landArray.push(copyArr[i])
    }
}
console.log(copyArr);
console.log(landArray);


// 5. Find the country containing the hightest number of characters in the countries array

let maxIndex = 0;
let maxLength = 0;
for(let i = 0; i < countries.length; i++) {
    if(countries[i].length > countries[maxIndex].length) {
        maxIndex = i;
        maxLength = countries[i].length
    }
}
console.log(countries)
console.log(countries[maxIndex])


// 6. Extract all the countries contain the word 'land' from the countries array and print it as array

let landArr = [];
for(let i = 0; i < countries.length; i++) {
    if(countries[i].includes('land')) {
        landArr.push(countries[i])
    }
}

console.log(landArr)


// 7. Extract all the countries containing only four characters from the countries array and print it as array

let fourArray = []
for(let i = 0; i < countries.length; i++) {
    if(countries[i].length === 4) {
        fourArray.push(countries[i])
    }
}
console.log(fourArray)


// 8. Extract all the countries containing two or more letters from the countries array and print it as array

let twoOrMore = [];
for(let i = 0; i < countries.length; i++) {
    if(countries[i].length >= 2) {
        twoOrMore.push(countries[i])
    }
}

console.log(twoOrMore)

// 9. Reverse the countries array and capitalize each country and stored it as an array

let capArray = copyArr.reverse()
for(let i = 0; i < copyArr.length; i++) {
    capArray[i] = copyArr[i].charAt(0).toUpperCase() + copyArr[i].slice(1, copyArr.length)
}

console.log(capArray)