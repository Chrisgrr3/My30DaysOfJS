let count = 0;

function increment() {
    count++;
    console.log("The count is now " + count);
    document.getElementById('count-el').innerHTML = count;
}

let saveEl = document.getElementById("save-el");

function save() {
    let status = count + " - ";
    saveEl.textContent += status;
}



