let inputNumberEl = document.getElementById("input-number")
let convertBtnEl = document.getElementById("convert-btn")
let meterToFeetEl = document.getElementById("meter-to-feet")
let literToGallonEl = document.getElementById("liter-to-gallon")
let kilogramToPoundEl = document.getElementById("kilogram-to-pound")

function meterToFeet(n) {
    let feet = n * 3.28084
    let meter = n * 0.3048
    meterToFeetEl.textContent = `${n} meters = ${feet} feet | ${n} feet = ${meter} meters`
}

function literToGallon(n) {
    let liter = n * 3.78541
    let gallon = n * 0.264172
    literToGallonEl.textContent = `${n} liters = ${gallon} gallons | ${n} gallons = ${liter} liters`
}

function kilogramToPound(n) {
    let kilogram = n * 0.453592
    let pound = n * 2.20462
    kilogramToPoundEl.textContent = `${n} kilograms = ${pound} pounds | ${n} pounds = ${kilogram} kilograms`
}

function allConverts() {
    let number = inputNumberEl.value
    
    meterToFeet(number)
    literToGallon(number)
    kilogramToPound(number)
}

