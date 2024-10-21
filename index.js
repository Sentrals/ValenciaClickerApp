// Project: Counter App

let count = 0;

function increment() {
    count += 1;
    console.log("Count: " + count);
    document.getElementById("count-el").innerText = count;
}

function save() {
    document.getElementById("save").innerText += " " + count + " -";
}
