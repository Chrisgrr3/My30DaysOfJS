const { countries } = require('../Day8/countries')

// 1. How many languages are there in the countries object file.

const langSet = new Set()
const langMap = countries.filter((country) => {
    country.languages.forEach((lang) => {
        langSet.add(lang)
    })
})
console.log(langSet)

console.log(`The number of languages in the countries object file is ${langSet.size}.`)


// 2. Use the countries data to find the 10 most spoken languages:

    // Your output should look like this
    //    console.log(mostSpokenLanguages(countries, 10))
    //    [
    //      { English: 91 },
    //      { French: 45 },
    //      { Arabic: 25 },
    //      { Spanish: 24 },
    //      { Russian: 9 },
    //      { Portuguese: 9 },
    //      { Dutch: 8 },
    //      { German: 7 },
    //      { Chinese: 5 },
    //      { Swahili: 4 },
    //      { Serbian: 4 }
    //    ]

    // Your output should look like this
    //   console.log(mostSpokenLanguages(countries, 3))
    //   [
    //      {English:91},
    //      {French:45},
    //      {Arabic:25}
    //   ]