document.addEventListener('DOMContentLoaded', () => {
    // 1
    const firstParagraph = document.querySelector('p')
    console.log(firstParagraph)

    // 2 
    const p1ById = document.querySelector('#first-p')
    const p2ById = document.querySelector('#second-p')
    const p3ById = document.querySelector('#third-p')
    const p4ById = document.querySelector('#fourth-p')
    console.log(p1ById, p2ById, p3ById, p4ById)

    // 3
    const allPs = document.querySelectorAll('p')
    console.log(allPs)

    // 4
    for(let i = 0; i < allPs.length; i++) {
        console.log(allPs[i].textContent)
    }

    // 5
    p4ById.textContent = 'Fourth Paragraph'
})

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name


// 2. Get each of the the paragraph using document.querySelector('#id') and by their id


// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name


// 4. Loop through the nodeList and get the text content of each paragraph


// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph


// 6. Set id and class attribute for all the paragraphs using different attribute setting methods

