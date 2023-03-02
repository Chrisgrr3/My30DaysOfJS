// Use the countries array to display all the countries. See the design

const url = 'https://restcountries.com/v3.1/all'
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        const top = document.getElementById('top')
        const h2 = document.createElement('h2')
        h2.textContent = `Total Number of Countries: ${countries.length}`
        top.appendChild(h2)
        console.log(top)
        top.style.textAlign = 'center'
    } catch (error) {
        console.error(error)
    }
}

fetchData()