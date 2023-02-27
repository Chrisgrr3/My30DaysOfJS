const { catsAPI } = require("./day18_level_2");
const countriesAPI = 'https://restcountries.com/v2/all'
// 1. Read the cats api and find the average weight of cat in metric unit.

const fetchData = async () => {
    try {
        const response = await fetch(catsAPI)
        const cats = await response.json()
        let result = []
        let avg;
        let sum = 0
        for(let i = 0; i < cats.length; i++) {
            avg = cats[0].weight.metric.split(' - ')
            avg.forEach((num) => {
                sum += parseInt(num)
            })
            sum = parseFloat(sum / 2)
            result.push(sum)
            sum = 0;
        }
        result.forEach((num) => {
            sum += num;
        })
        avg = sum / result.length
        console.log(avg)
    } catch(err) {
        console.error(err)
    }
}

// fetchData()


// 2. Read the countries api and find out the 10 largest countries

const tenLargest = async () => {
    try{
        let result = []
        const response = await fetch(countriesAPI);
        const countries = await response.json()
        countries.sort((a, b) => {
            if(a.area < b.area) return 1;
            if(a.area > b.area) return -1
        })
        for(let i = 0; i < 10; i++) {
            result.push({country: countries[i].name, area: countries[i].area})
        }
        console.log(result)
    }
    catch (err) {
        console.error(err)
    }
}

// tenLargest()

// 3. Read the countries api and count total number of languages in the world used as officials.

const totalLanguages = async () => {
    try {
        const languageSet = new Set()
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        countries.forEach((country) => {
            for(let i = 0; i < country.languages.length; i++) {
                languageSet.add(country.languages[i].name)
            }
        })
        const numberOfLangs = languageSet.size
        console.log(`The number of languages is ${numberOfLangs}`)
    }
    catch (err){
        console.error(err)
    }
}
totalLanguages()