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
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']



// 1. Develop a small script which generate any number of characters random id:

    //   fe3jo1gl124g
    //   xkqci4utda1lmbelpkm03rba

function randomID(number) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
    for (let i = 0; i < number; i++) {
        result += characters.charAt(parseInt(Math.random()*characters.length))
    }
    console.log(result)
}
// randomID(45)


// 2. Write a script which generates a random hexadecimal number.

    // '#ee33df'

function randomHex(length) {
    let result = '';
    let characters = 'abcdef1234567890'
    for(let i = 0; i < length; i++) {
        result += characters.charAt(parseInt(Math.random() * characters.length))
    }
    console.log(result)
}
randomHex(6)

// 3. Write a script which generates a random rgb color number.

    // rgb(240,180,80)

function randRGB() {
    let vals = [];
    for(let i = 0; i < 3; i++) {
        vals.push(Math.floor(Math.random() * 255))
    }
    let r = vals[0];
    let g = vals[1];
    let b = vals[2];
    console.log(`rgb(${r},${g},${b})`)
}
randRGB()

// 4. Using the above countries array, create the following new array.

    // ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// console.log(countries.toString().toUpperCase().split(','))

// or

for(let i = 0; i < countries.length; i++) {
    countries[i] = countries[i].toUpperCase()
}
console.log(countries)


// 5. Using the above countries array, create an array for countries length'.

    // [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

let newArr = [];
for(let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].length)
}
console.log(newArr)


// 6. Use the countries array to create the following array of arrays:

    //   [
    //   ['Albania', 'ALB', 7],
    //   ['Bolivia', 'BOL', 7],
    //   ['Canada', 'CAN', 6],
    //   ['Denmark', 'DEN', 7],
    //   ['Ethiopia', 'ETH', 8],
    //   ['Finland', 'FIN', 7],
    //   ['Germany', 'GER', 7],
    //   ['Hungary', 'HUN', 7],
    //   ['Ireland', 'IRE', 7],
    //   ['Iceland', 'ICE', 7],
    //   ['Japan', 'JAP', 5],
    //   ['Kenya', 'KEN', 5]
    // ]

console.log(countries)

for(let i = 0; i < countries.length; i++) {
    countries[i] = countries[i].toLowerCase()
    let letter = countries[i].charAt(0).toUpperCase();
    console.log(letter)
    countries[i] = letter + countries[i].substring(1, countries[i].length);
}
countries.push('Iceland') && countries.sort();

console.log(countries)

const myArr = [];
for(let i = 0; i < countries.length; i++) {
    myArr.push([countries[i], countries[i].substring(0,3).toUpperCase(), countries[i].length])
}
 console.log(myArr)


// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

    // ['Finland','Ireland', 'Iceland']

const landArray = []
for(let i = 0; i < countries.length; i++) {
    if(countries[i].includes('land')) {
        landArray.push(countries[i])
    }
}
if (landArray.length === 0) {
    console.log('All these countries are without land')
} else {
    console.log(landArray)
}


// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

    // ['Albania', 'Bolivia','Ethiopia']
const iaArray = [];
for(let i = 0; i < countries.length; i++) {
    if(countries[i].endsWith('ia')) {
        iaArray.push(countries[i])
    }
}
if(iaArray.length === 0) {
    console.log(`None of these countries end in 'ia'` )
} else {
    console.log(iaArray)    
}


// 9. Using the above countries array, find the country containing the biggest number of characters.

    // Ethiopia

let maxLength = 0;
let maxIndex = 0;
for(let i = 0; i < countries.length; i++) {
    if(countries[i].length > maxLength) {
        maxLength = countries[i].length;
        maxIndex = i;
    }
}
console.log(countries[maxIndex])


// 10. Using the above countries array, find the country containing only 5 characters.

    // ['Japan', 'Kenya']

let fiveLetters = [];
for(let i = 0; i < countries.length; i++) {
    if(countries[i].length === 5) {
        fiveLetters.push(countries[i])
    }
}
console.log(fiveLetters);


// 11. Find the longest word in the webTechs array

maxLength = 0;
maxIndex = 0;
for(let i = 0; i < webTechs.length; i++) {
    if(webTechs[i].length > maxLength) {
        maxLength = webTechs[i].length;
        maxIndex = i;
    }
}
console.log(webTechs[maxIndex])


// 12. Use the webTechs array to create the following array of arrays:

    // [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

let webArr = [];
for(let i = 0; i < webTechs.length; i++) {
    webArr.push([webTechs[i], webTechs[i].length])
}
console.log(webArr)


// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack



// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.



// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.



// 16. Print all the elements of array as shown below.

    //   const fullStack = [
    //     ['HTML', 'CSS', 'JS', 'React'],
    //     ['Node', 'Express', 'MongoDB']
    //   ]

        //   HTML
        //   CSS
        //   JS
        //   REACT
        //   NODE
        //   EXPRESS
        //   MONGODB