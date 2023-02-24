let { student } = require('./day16_level_1')

// 1. Stringify the students object with only firstName, lastName and skills properties

student = JSON.stringify(student,['firstName', 'lastName', 'skills'])
console.log(student)