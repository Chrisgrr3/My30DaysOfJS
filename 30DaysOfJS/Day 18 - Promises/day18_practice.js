// Callback
const doSomething = callback => {
	setTimeout(() => {
		const skills = ['HTML', 'CSS', 'JS']
		callback('It did not go well', skills)
	}, 2000)
}

const callback = (err, result) => {
	if (err) {
		return console.log(err)
	}
	return console.log(result)
}

// doSomething(callback)

// Callback function where err is false, returning the else block
const doSomethingElse = cBack => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        cBack(false, skills)
    }, 2000)
}

// doSomethingElse((err, result) => {
//     if (err) {
//         return console.log(err)
//     }
//     return console.log(result)
// })

// Promise construction syntax
const promiseSyntax = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
})

// Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         if(skills.length > 0) {
//             resolve(skills)
//         } else {
//             reject('Something went wrong')
//         }
//     }, 3000)
// })

// doPromise
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => console.log(error))

// Now, we'll make an example where the promise is settled with reject:

// const rejPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const skills = ['HTML', 'CSS', 'JS']
//         if(skills.includes('Node')) {
//             resolve('fullstack developer')
//         } else {
//             reject('Something went wrong')
//         }
//     }, 4000)
// })

// rejPromise
//     .then(result => {
//         console.log(result)
//     })
//     .catch(error => {
//         console.log(error)
//     })

const url = 'https://restcountries.com/v2/all' // countries api
fetch(url)
    .then(response => response.json()) // accessing the API data as JSON
    .then(data => {
        for(let i = 0; i < 5; i++) {
            console.log(data[i].name) // getting the data
        }
    })
    .catch(error => console.error(error)) // handling error if something wrong happens

const square = async function(n) {
    return n * n
}

// console.log(square(2))

async function cube(n) {
    return Math.pow(n, 3)
}
// const cube = (n) => {
//     return Math.pow(n, 3)
// }

const cubeVal = async function(n) {
    const value = await cube(n)
    console.log(value)
}
// cubeVal(3)

const readSquare = async function(n) {
    const value = await square(n)
    console.log(value)
}
readSquare(3)

fetch(url)
    .then(response => response.json())
    .then(data => {
        for(let i = 5; i < 10; i++) {
            console.log(data[i].flag)
        }
    })
    .catch(error => console.error(error))

const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        for(let i = 100; i < 105; i++) {
            console.log(countries[i].region)
        }
    } catch(err) {
        console.error(err)
    }
}

fetchData()