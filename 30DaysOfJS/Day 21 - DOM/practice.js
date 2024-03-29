document.addEventListener("DOMContentLoaded" , () => {
    const allTitles = document.getElementsByTagName('h1')

    console.log(allTitles)
    console.log(allTitles.length)

    for(let i = 0; i < allTitles.length; i++) {
        console.log(allTitles[i])
    }
    console.log('Below, we are getting each element with the class name \'title\'')
    const allClasses = document.getElementsByClassName('title')
    for(let i = 0; i < allClasses.length; i++) {
        console.log(allClasses[i])
    }

    console.log("Below, we are getting the element with the id 'first-title'")
    let firstTitle = document.getElementById('first-title')
    console.log(firstTitle)

    const titles = document.querySelectorAll('h1') // Selects all available h1 elements

    console.log(titles.length)
    titles.forEach(title => console.log(title))

    console.log('Below, we add a class name and id attributes to the fourth h1 element')
    const getTitles = document.querySelectorAll('h1')
    getTitles[3].className = 'title'
    getTitles[3].id = 'fourth-title'
    
    console.log("Now, let's add a 'header-title' class to the fourth h1")
    getTitles[3].classList.add('header-title')
    console.log(getTitles[3])

    console.log("And now we'll remove the 'title' class from the fourth h1")
    getTitles[3].classList.remove('title')

    console.log('Adding text to 4 h1 element')
    getTitles[3].textContent = 'Fourth Title'

    getTitles.forEach((title, index) => {
        title.style.fontSize = '24px'
        if (index % 2 === 0) {
            title.style.color = 'green'
            title.style.backgroundColor = 'pink'
            title.style.display = 'inline-block'
        } else {
            title.style.color = 'red'
            title.style.backgroundColor = 'purple'
            title.style.display = 'inline-block'
        }
    })
})