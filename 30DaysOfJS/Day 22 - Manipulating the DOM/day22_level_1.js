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
        for(let i = 1; i < num; i++) {
            if(num % i == 0) {
                result = false
            }
            return result
        }
    }
    for(let i = 0; i <= 100; i++) {
        newDiv = document.createElement('div')
        newDiv.style.display = 'inline-block'
        if(isPrime(i)) {
            newDiv.style.backgroundColor = 'red'
        }
        newDiv.innerHTML = i
        container.appendChild(newDiv)
    }
})


// 1. Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
    
    // Even numbers background is green
    
    // Odd numbers background is yellow

    // Prime numbers background is red