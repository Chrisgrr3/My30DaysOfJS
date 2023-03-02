// 1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.

    // a. The year color is changing every 1 second


    // b. The date and time background color is changing every on seconds


    // c. Completed challenge has background green


    // d. Ongoing challenge has background yellow


    // e. Coming challenges have background red


document.addEventListener('DOMContentLoaded', () => {
    const year = document.querySelector('.colors')
    const colors = ['red', 'green', 'yellow', 'blue', 'purple', 'pink', 'orange', 'cyan']
    function changeColors() {
        year.style.color = colors[Math.floor(Math.random() * colors.length)]
    }
    setInterval(changeColors, 1000)
})