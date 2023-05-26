//screen area

let prevCalculationArea = document.querySelector(".previous-calculation");
let currentCalculationArea = document.querySelector(".current-calculation");

//buttons

let clearBtn = document.querySelector(".clear-delete .clear");
let deleteBtn = document.querySelector(".clear-delete .delete");

let numbers = document.querySelectorAll(".num");
let operators = document.querySelectorAll(".operator");
let dotBtn = document.querySelector(".dot-button");
let equalBtn = document.querySelector(".equal-button");

// variables
//top and botttom area of display
let prevCalc = 0;
let currentCalc = 0;
let operator = "";
let previousOperator = "=";

//events

numbers.forEach((btn) => {
    btn.addEventListener('click', () => {
        currentCalculationArea.textContent += btn.textContent;
    })
})
operators.forEach((btn) => {
    btn.addEventListener('click', () => {
        operator = btn.textContent;
        if (previousOperator != '=') {
            currentCalc = +currentCalculationArea.textContent;
            currentCalculationArea.textContent = "";
            prevCalc = +operate(prevCalc, previousOperator, currentCalc)
            prevCalculationArea.textContent = prevCalc + operator;
        } else {
            prevCalculationArea.textContent = currentCalculationArea.textContent + operator;
            prevCalc = +currentCalculationArea.textContent;
            currentCalculationArea.textContent = "";
        }
        previousOperator = operator;

    })
})

clearBtn.addEventListener('click', clearScreen);
deleteBtn.addEventListener('click', deleteScreen);
equalBtn.addEventListener('click', operateAndUpdate);



function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return +num1 + +num2;
        case "-":
            return +num1 - +num2;
        case "*":
            return +num1 * +num2;
        case "÷":
            return +num1 / +num2;
    }
}
function clearScreen() {
    prevCalculationArea.textContent = "";
    currentCalculationArea.textContent = "";
    prevCalc = 0;
    currentCalc = 0;
    operator = "";
    previousOperator = "=";
}

function deleteScreen() {
    currentCalculationArea.textContent = currentCalculationArea.textContent.slice(0, -1);
    currentCalc = currentCalculationArea.textContent;
}

function updateCurrentCalc(text) {
    currentCalculationArea.textContent = text;
}
function updatePrevCalc(text) {
    prevCalculationArea.textContent = text;
}

function operateAndUpdate() {
    currentCalc = +currentCalculationArea.textContent;
    // currentCalc = operate(prevCalc,operator,currentCalc);
    prevCalculationArea.textContent += currentCalc + "=";
    currentCalculationArea.textContent = operate(prevCalc, operator, currentCalc);
    previousOperator = "=";
}
