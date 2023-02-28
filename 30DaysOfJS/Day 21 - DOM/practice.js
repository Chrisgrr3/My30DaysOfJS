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
})