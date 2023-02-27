const { catsAPI } = require("./day18_level_2");
const countriesAPI = 'https://restcountries.com/v2/all'
// 1. Read the cats api and find the average weight of cat in metric unit.

const fetchData = async () => {
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()
        
        console.log(catAvg)
    } catch(err) {
        console.error(err)
    }
}

fetchData()

// 2. Read the countries api and find out the 10 largest countries




// 3. Read the countries api and count total number of languages in the world used as officials.

