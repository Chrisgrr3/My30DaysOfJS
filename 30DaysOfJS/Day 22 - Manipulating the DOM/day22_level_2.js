// Use the countries array to display all the countries. See the design

const url = 'https://restcountries.com/v3.1/all'
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        
        const top = document.getElementById('top')
        top.style.fontFamily = 'Arial'


        const h1 = document.createElement('h1')
        h1.innerHTML = '<h1>W O R L D&nbsp;&nbsp;&nbsp;C O U N T R I E S&nbsp;&nbsp;&nbsp;L I S T</h1>'
        h1.style.fontSize = '20px'
        top.appendChild(h1)

        const h2 = document.createElement('h2')
        h2.textContent = `Total Number of Countries: ${countries.length}`
        top.appendChild(h2)

        console.log(top)
        top.style.textAlign = 'center'

        countries.sort((a, b) => {
            if(a.name.common < b.name.common) return -1;
            if(a.name.common > b.name.common) return 1
        })

        

    } catch (error) {
        console.error(error)
    }
}

fetchData()