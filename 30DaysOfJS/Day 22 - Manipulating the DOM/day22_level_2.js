// Use the countries array to display all the countries. See the design

const url = 'https://restcountries.com/v3.1/all'
const fetchData = async () => {
    try {
        const response = await fetch(url)
        const countries = await response.json()
        
        const top = document.getElementById('top')
        document.body.style.fontFamily = 'Arial'


        const container = document.getElementById('container')
        container.style.width = '1300px'

        const h1 = document.createElement('h1')
        h1.innerHTML = '<h1>W O R L D&nbsp;&nbsp;&nbsp;C O U N T R I E S&nbsp;&nbsp;&nbsp;L I S T</h1>'
        h1.style.fontSize = '20px'
        top.appendChild(h1)


        const h2 = document.createElement('h2')
        h2.textContent = `Total Number of Countries: ${countries.length}`
        top.appendChild(h2)


        top.style.textAlign = 'center'


        countries.sort((a, b) => {
            if(a.name.common < b.name.common) return -1;
            if(a.name.common > b.name.common) return 1
        })


        let square;
        for(let country of countries) {
            square = document.createElement('div')
            square.innerHTML = `<span>${country.name.common}</span>`
            square.style.margin = '10px'
            square.style.outline = '1px solid #F4F4F6'
            square.style.display = 'inline-block'
            square.style.fontSize = '20px'
            square.style.paddingTop = '52px'
            square.style.paddingBottom = '52px'
            square.style.borderRadius = '5px'
            square.style.padding = '40px'
            square.style.textAlign = 'center'
            square.style.boxShadow = '5px 5px 5px 5px gray'
            container.appendChild(square)
        }
    } catch (error) {
        console.error(error)
    }
}

fetchData()