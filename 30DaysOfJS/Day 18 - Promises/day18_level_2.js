// 1. Print out all the cat names in to catNames variable.

const catsAPI = 'https://api.thecatapi.com/v1/breeds'

const fetchData = async () => {
    let catNames = []
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()
        for(let i = 0; i < cats.length; i++) {
            catNames.push(cats[i].name)
        }
        console.log(catNames)
    } catch (err) {
        console.error(err)
    }
}

// fetchData()

module.exports = { catsAPI }