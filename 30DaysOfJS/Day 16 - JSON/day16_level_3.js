let { txt } = require('./day16_level_1')

// 1. Parse the txt JSON to object.

txt = JSON.parse(txt)
// console.log(txt)


// 2. Find the user who has many skills from the variable stored in txt.

const keys = Object.keys(txt)
// console.log(keys)
let mostSkills = 0;
let userKey = '';

for(let key of keys) {
    if(txt[key].skills.length > mostSkills) {
        mostSkills = txt[key].skills.length;
        userKey = key
    }
}

console.log(`The user with the most skills is ${userKey}, who has ${mostSkills} skills.`)