const { countries } = require('../Day8/countries')

console.log(countries)
// 1. Destructure the countries object print name, capital, population and languages of all countries

for(const {name, capital, population, languages} of countries) {
    console.log(`Name: ${name}, Capital: ${capital}, Population: ${population}, Languages: ${languages}`)
}


// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
    // console.log(name, skills, jsScore, reactScore)
    // David (4) ["HTM", "CSS", "JS", "React"] 90 95

let student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const [name, skills, scores, jsScore = student[2][2], reactScore = student[2][3]] = student
console.log(name, skills, jsScore, reactScore)


// 3. Write a function called convertArrayToObject which can convert the array to a structure object.
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
      ]

    // console.log(convertArrayToObject(students))
    // [
    //   {
    //     name: 'David',
    //     skills: ['HTM','CSS','JS','React'],
    //     scores: [98,85,90,95]
    //   },
    //   {
    //     name: 'John',
    //     skills: ['HTM','CSS','JS','React'],
    //     scores: [85, 80,85,80]
    //   }
    // ]

const convertArrayToObject = () => {
    const result = [];
    for(const [name, skills, scores] of students) {
        result.push({name, skills, scores})
    }
    return result
}
console.log(convertArrayToObject())


// 4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
    // Add Bootstrap with level 8 to the front end skill sets
    // Add Express with level 9 to the back end skill sets
    // Add SQL with level 8 to the data base skill sets
    // Add SQL without level to the data science skill sets
    student = {
      name: 'David',
      age: 25,
      skills: {
        frontEnd: [
          { skill: 'HTML', level: 10 },
          { skill: 'CSS', level: 8 },
          { skill: 'JS', level: 8 },
          { skill: 'React', level: 9 }
        ],
        backEnd: [
          { skill: 'Node',level: 7 },
          { skill: 'GraphQL', level: 8 },
        ],
        dataBase:[
          { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience:['Python', 'R', 'D3.js']
      }
    }

    // The copied object output should look like this:

//     {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         {skill: 'HTML',level: 10},
//         {skill: 'CSS',level: 8},
//         {skill: 'JS',level: 8},
//         {skill: 'React',level: 9},
//         {skill: 'BootStrap',level: 8}
//       ],
//       backEnd: [
//         {skill: 'Node',level: 7},
//         {skill: 'GraphQL',level: 8},
//         {skill: 'Express',level: 9}
//       ],
//       dataBase: [
//         { skill: 'MongoDB',level: 7.5},
//         { skill: 'SQL',level: 8}
//       ],
//       dataScience: ['Python','R','D3.js','SQL']
//     }
//   }

const copiedStudent = {...student}
copiedStudent.name = 'Chris'
copiedStudent.skills.frontEnd.push({skill: 'Bootstrap', level: 8})
copiedStudent.skills.backEnd.push({skill: 'Express', level: 9})
copiedStudent.skills.dataBase.push({skill: 'SQL', level: 8})
copiedStudent.skills.dataScience.push('SQL')
console.log(student.skills)
