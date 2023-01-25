// Create datatypes.js file and use the JavaScript typeof operator to check different data types. Check the data type of each variable
const variables = require('./variable');
// or
// import { string, hungry, phoneNumber, name } from './variable.js'

function readTypes() {
    console.log(variables.hungry, ":", typeof variables.hungry);
    console.log(variables.name, ":", typeof variables.name);
    console.log(variables.phoneNumber, ":", typeof variables.phoneNumber);
    console.log(variables.string, ":", typeof variables.string);
}

module.exports = {readTypes};
