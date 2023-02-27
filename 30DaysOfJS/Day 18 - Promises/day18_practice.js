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

doSomething(callback)

// Callback function where err is false, returning the else block
const doSomethingElse = cBack => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        cBack(false, skills)
    }, 2000)
}

doSomethingElse((err, result) => {
    if (err) {
        return console.log(err)
    }
    return console.log(result)
})

// Promise construction syntax
const promiseSyntax = new Promise((resolve, reject) => {
    resolve('success')
    reject('failure')
})

// Promise
const doPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const skills = ['HTML', 'CSS', 'JS']
        if(skills.length > 0) {
            resolve(skills)
        } else {
            reject('Something went wrong')
        }
    }, 3000)
})

doPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => console.log(error))