let services = [
    { service: "Wash Car", price: 10 },
    { service: "Mow Lawn", price: 20 },
    { service: "Pull Weeds", price: 30 }
]

const btnWash = document.getElementById("btn-wash")
const btnMow = document.getElementById("btn-mow")
const btnPull = document.getElementById("btn-pull")
const tasksBody = document.getElementById("tasks-body")
const notesBody = document.getElementById("notes-body")
const sendBtn = document.getElementById("send-btn")

let totalPrice = 0

let itemRemove

function renderItemTitle(itemTitle, itemPrice, id) {
    tasksBody.innerHTML += `
    <div class="task-item">
    <div class="task-item-title">
    <h3 class="item-title">${itemTitle}</h3>
    <span id="${id}" price=${itemPrice} class="item-remove">Remove</span>
    </div>
    <div class="task-item-price">
    <span class="dolor">$</span>
    <span class="item-price">${itemPrice}</span>
    </div>
    </div>`

    renderNotesBody(false)

    removeItemOnClick()
}

function renderNotesBody(makeEmpty) {
    if (makeEmpty === true) {
        notesBody.innerHTML = `
        <p class="note"></p>
        <h2 class="total-price">$${totalPrice}</h2>`
    } else {
        notesBody.innerHTML = `
        <p class="note">We accept cash, credit card, or PayPal</p>
        <h2 class="total-price color">$${totalPrice}</h2>`
    }
}

btnWash.addEventListener("click", function () {
    const itemId = 'service-0'

    if (!document.querySelector(`.task-item-title span#${itemId}`)) {
        totalPrice += services[0].price
        renderItemTitle(services[0].service, services[0].price, itemId)
        isWash = true
    }
})

btnMow.addEventListener("click", function () {
    const itemId = "service-1"
    
    if (!document.querySelector(`.task-item-title span#${itemId}`)) {
        totalPrice += services[1].price
        renderItemTitle(services[1].service, services[1].price, itemId)
        isMow = true
    }
})

btnPull.addEventListener("click", function () {
    const itemId = 'service-2';

    if (!document.querySelector(`.task-item-title span#${itemId}`)) {
        totalPrice += services[2].price
        renderItemTitle(services[2].service, services[2].price, itemId)
        isPull = true
    }
})


function removeItemOnClick() {
    itemRemove = document.querySelectorAll(".item-remove")

    itemRemove.forEach(item => {
        item.onclick = () => {
            item.parentElement.parentElement.remove()
            
            const price = Number(item.getAttribute("price"))
            totalPrice -= price

            tasksBody.childElementCount == 0 ? renderNotesBody(true) : renderNotesBody(false)
        }
    })

}

sendBtn.addEventListener("click", function () {
    tasksBody.innerHTML = ""
    isWash = isMow = isPull = false
    totalPrice = 0
    renderNotesBody(true)
})