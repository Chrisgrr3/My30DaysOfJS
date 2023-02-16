const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

// 1. Find the person who has many skills in the users object.

function mostSkills() {
    const keys = Object.keys(users)

    let name;

    let userWithMostSkills = users[keys[0]]
    // console.log(userWithMostSkills)

    let numberOfSkills = users[keys[0]].skills.length
    // console.log(numberOfSkills)

    for(let index in keys) {
        if(users[keys[index]].skills.length > numberOfSkills) {
            name = keys[index]
            userWithMostSkills = users[keys[index]]
            numberOfSkills = users[keys[index]].skills.length
        }
    }
    console.log(`The user with the most skills is ${name}. He has ${numberOfSkills} skills.`)
}

mostSkills()


// 2. Count logged in users, count users having greater than equal to 50 points from the following object.

function numberOfLogins() {
    const keys = Object.keys(users)
    let count = 0;
    for(let key in keys) {
        if(users[keys[key]].isLoggedIn) {
            count++;
        }
    }
    return count;
}

console.log(numberOfLogins())


// 3. Find people who are MERN stack developer from the users object

function mernStack() {
    const keys = Object.keys(users)
    let thisUsersSkills;
    const mernDevs = [];

    for(let key in keys) {
        thisUsersSkills = users[keys[key]].skills

        if(thisUsersSkills.includes('MongoDB','Express','React','Node')) {
            mernDevs.push(keys[key])
        }
    }
    console.log(mernDevs)
    return mernDevs;
}

mernStack()


// 4. Set your name in the users object without modifying the original users object

const copyUsers = Object.assign({}, users)
copyUsers.Chris = {
    email: 'chris@chris.com',
    skills: [
        'HTML',
        'JavaScript',
        'Express',
        'React',
        'Node'
    ],
    age: 24, isLoggedIn: false,
    points: 60
}
console.log(copyUsers)


// 5. Get all keys or properties of users object

const entries = Object.entries(users)
console.log(entries)


// 6. Get all the values of users object



// 7. Use the countries object to print a country name, capital, populations and languages.