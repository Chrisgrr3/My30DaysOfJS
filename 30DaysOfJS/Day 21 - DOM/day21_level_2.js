document.addEventListener('DOMContentLoaded', () => {
    let tags = document.querySelectorAll('p')
    // 1

    for(let i = 0; i < tags.length; i++) {
        if(i % 2 == 0) {
            tags[i].style.color = 'purple'
            tags[i].style.background = 'pink'
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

    // 2
    for(let i = 0; i < tags.length; i++) {
        if(i % 2 == 0) {
            tags[i].style.color = 'green'
        } else {
            tags[i].style.color = 'red'
        }
    }

    // 3
    for(let i = 0; i < tags.length; i++) {
        tags[i].setAttribute('id',`${i}`)
        tags[i].className = `${i}`
        tags[i].textContent = `Paragraph ${i + 1}`
    }
})

// 1. Change stlye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)


// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color


// 3. Set text content, id and class to each paragraph