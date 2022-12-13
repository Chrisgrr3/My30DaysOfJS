let count = 0;

function increment() {
    count++;
    console.log("The count is now " + count);
    document.getElementById('count-el').textContent = count;
}

let saveEl = document.getElementById("save-el");

function save() {
    let status = count + " - ";
    saveEl.textContent += status;
    reset();
}

function reset() {
    count = 0;
    document.getElementById('count-el').textContent = count;
}



