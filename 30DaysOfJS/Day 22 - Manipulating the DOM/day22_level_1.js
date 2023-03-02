document.addEventListener('DOMContentLoaded', () => {
    const h1 = document.getElementsByTagName('h1')
    const container = document.getElementById("number-container")
    console.log(h1[0])
    h1[0].style.margin = 'auto'
    h1[0].style.textAlign = 'center'
    h1[0].style.fontFamily = "'Courier New', Courier, monospace"
    let newDiv;
    const isEven = num => {
        if(num % 2 == 0) {
            return true
        } else {
            return false
        }
    }
    const isPrime = num => {
        let result = true;
        if(num == 2) return true;
        if(num == 1) return false;
        if(num == 0) return false;
        for(let i = 2; i < num; i++) {
            if(num % i == 0) {
                result = false
            }
        }
        return result
    }
    for(let i = 0; i <= 100; i++) {
        newDiv = document.createElement('div')
        newDiv.style.display = 'inline-block'
        if(isEven(i)) {
            newDiv.style.backgroundColor = '#21BF73'
        } else {
            newDiv.style.backgroundColor = '#FDDB3A'
        }
        if(isPrime(i)) {
            newDiv.style.backgroundColor = '#FD5E53'
        }
        newDiv.innerHTML = `<span>${i}</span>`
        newDiv.style.paddingTop = '25px'
        newDiv.style.paddingBottom = '25px'
        newDiv.style.color = 'white'
        newDiv.style.textAlign = 'center'
        newDiv.style.width = '112px'
        newDiv.style.fontSize = '21px'
        newDiv.style.fontWeight = '1000'
        newDiv.style.fontFamily = "cursive"
        newDiv.style.margin = '3px'
        container.appendChild(newDiv)
    }
    const spans = document.querySelectorAll('span')
    for(let span of spans) {
        span.style.verticalAlign = 'bottom'
    }
})


// 1. Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
    
    // Even numbers background is green
    
    // Odd numbers background is yellow

    // Prime numbers background is red