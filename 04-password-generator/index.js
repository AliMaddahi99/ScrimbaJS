let passwordLengthInput = document.getElementById("password-length-input")
let passwordContainerEl = document.getElementsByClassName("password-container")
let copyEl = document.getElementsByClassName("copy")
let passwordEl = document.getElementsByClassName("password")

let passwordLength = passwordLengthInput.value = 4

let chars = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
    'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
    'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', '~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_',
    '=', '+', '/', '.'
]

function randomPasswordGenerator(passLen = passwordLength) {
    let password = ""
    if (passLen >= 4 && passLen <= 32) {
        for (let i = 0; i < passLen; i++) {
            password += chars[Math.floor(Math.random() * chars.length)]
        }
    }

    return password
}

function generatePasswordNTime(n = passwordEl.length) {
    let nPasswords = []
    passwordLength = passwordLengthInput.value

    for (let i = 0; i < n; i++) {
        nPasswords[i] = randomPasswordGenerator(passwordLength)
    }

    return nPasswords
}

function writePasswordsInPasswordEls() {
    isPasswordElEmpty = false
    for (let i = 0; i < passwordEl.length; i++) {
        passwordEl[i].textContent = generatePasswordNTime()[i]
        passwordEl[i].style.color = "#55F991"
    }
}

function copyWhenClicked() {
    copiedPassword = ""
    for (let i = 0; i < passwordContainerEl.length; i++) {
        passwordContainerEl[i].addEventListener("click", function copyOnClick() {
            copiedPassword = navigator.clipboard.writeText(passwordEl[i].textContent)

            navigator.clipboard.readText()
                .then(text => {
                    console.log("Password copied: ", text)
                })
                .catch(err => {
                    console.log("Error: ", err)
                })
        })
    }
}

function onHoverShowCopy() {
    for (let i = 0; i < passwordContainerEl.length; i++) {
        passwordContainerEl[i].addEventListener("mouseover", function showCopy() {
            copyEl[i].style.display = "inline"
        })

        passwordContainerEl[i].addEventListener("mouseleave", function showTextContent() {
            copyEl[i].style.display = "none"
        })
    }
}
onHoverShowCopy()
copyWhenClicked()