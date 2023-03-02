document.addEventListener('DOMContentLoaded', () => {
    let tags = document.querySelectorAll('p')
    for(let i = 0; i < tags.length; i++) {
        if(i % 2 == 0) {
            tags[i].style.color = 'green'
            tags[i].style.background = 'blue'
            tags[i].style.border = '10px dashed black'
            tags[i].style.fontSize = '30px'
            tags[i].style.fontFamily = 'arial'
        } else {
            tags[i].style.color = 'orange'
            tags[i].style.background = 'black'
            tags[i].style.border = '4px dotted green'
            tags[i].style.fontSize = '40px'
            tags[i].style.fontFamily = 'sans-serif'
        }
    }
})

// 1. Change stlye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)


// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color


// 3. Set text content, id and class to each paragraph