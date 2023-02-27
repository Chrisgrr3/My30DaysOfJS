// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.

const url = 'https://restcountries.com/v2/all'

const fetchData = async () => {
    try{
        const response = await fetch(url)
        const countries = await response.json()
        let langs = []
        for(let i = 0; i < countries.length; i++) {
            for(let j = 0; j < countries[i].languages.length; j++) {
                langs.push(countries[i].languages[j].name)
            }
            console.log('Name:', countries[i].name, '| Capital:', countries[i].capital, '| Languages:', langs, '| Population:', countries[i].population, '| Area:', countries[i].area)
            langs = []
        }
    } catch(err) {
        console.error(err)
    }
}
// fetchData()