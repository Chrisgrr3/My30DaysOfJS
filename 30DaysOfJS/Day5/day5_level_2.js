const countries = require('./countries').countries;
const web_techs = require('./webTechs').webTechs;

// 1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

console.log('Question 1 complete.')

// 2. First remove all the punctuations and change the string to array and count the number of words in the array

let text = 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
text = text.replace(/,/g,'');
text = text.replace(/\./g, '').split(' ');
console.log(text);
console.log(text.length)


// 3. In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
if (! shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat')
}
console.log(shoppingCart)
if (! shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar')
}
console.log(shoppingCart)
const allergicToHoney = false;

if(allergicToHoney) {
    shoppingCart.splice(shoppingCart.indexOf('Honey'), 1);
}
console.log(shoppingCart)

shoppingCart[shoppingCart.indexOf('Tea')] = 'Green Tea'
console.log(shoppingCart);


// 4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

countries.includes('Ethiopia') ? console.log('ETHIOPIA') : countries.push('Ethiopia')

// 5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

web_techs.includes('Sass') ? console.log('Sass is a CSS preprocess') : web_techs.push('Sass') && console.log(web_techs);

// 6. Concatenate the following two variables and store it in a fullStack variable.

    // const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
    // const backEnd = ['Node','Express', 'MongoDB']

    // console.log(fullStack)
    // ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]