let count = 0

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

console.log(countEl)
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let saved = count + " - "
    saveEl.textContent += saved
    count = 0
    countEl.textContent = count
}