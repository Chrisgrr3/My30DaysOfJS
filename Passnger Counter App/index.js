let count = 0;

function increment() {
    count++;
    console.log("The count is now " + count);
    document.getElementById('count-el').innerHTML = count;
}

function save() {
    console.log(count);
}




