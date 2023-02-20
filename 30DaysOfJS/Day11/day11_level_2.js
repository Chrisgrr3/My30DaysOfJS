const { users } = require('./day11_level_1')

// 1. Iterate through the users array and get all the keys of the object using destructuring

for(const {name, scores, skills, age} of users) {
    console.log(`Name: ${name} Scores: ${scores} Skills: ${skills} Age: ${age}`)
}


// 2. Find the persons who have less than two skills

const lessThan2Skills = []
for(const {name, skills} of users) {
    if(skills.length < 2) lessThan2Skills.push(name)
}

console.log(lessThan2Skills)