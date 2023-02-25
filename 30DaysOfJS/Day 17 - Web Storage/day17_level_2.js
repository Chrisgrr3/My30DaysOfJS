// 1. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName: 'Chris',
    lastName: 'Guerrero',
    age: 290,
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React'
    ],
    country: 'USA',
    enrolled: [
        'CS50',
        'MATH404',
        'ENG200'
    ]
}

const studentJSON = JSON.stringify(student, undefined, 4)

localStorage.setItem('student', studentJSON)
localStorage.getItem('student')