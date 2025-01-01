const add = (a, b) => {
    return parseInt(a) + parseInt(b);
}
const subtract = (a, b) => {
    return a - b;
}
const multiply = (a, b) => {
    return a * b;
}
const divide = (a, b) => {
    return a / b;
}

const operate = (a, b, operand) => {
    
    if(operand == "+"){
        return add(a, b);
    }else if(operand == "-"){
        return subtract(a, b);
    }else if(operand == "*"){
        return multiply(a, b);
    }else if(operand == "/"){
        return divide(a, b);
    }
}

let isOperatorClicked = false;
const handleClick = () => {
    if(isOperatorClicked == true){
        btnOperand.forEach(item => item.disabled = true)
    }else{
        btnOperand.forEach(item => item.disabled = false)
    }
}

let result = 0;
let count = 0;
const displayInput = document.querySelector("#display-one")
const displayInputTwo = document.querySelector("#display-two")


const btn = document.querySelectorAll('.btn-number');
btn.forEach((button)=>{
    button.addEventListener("click",()=>{
        let value = button.getAttribute('id')
        displayInput.textContent += value;
    })

});

// OPERANDS ==========================

const btnOperand = document.querySelectorAll(".operator");
btnOperand.forEach((button)=>{
    button.addEventListener('click',() => {
        let op = button.getAttribute('data-value')
        if(count == 0){
            displayInput.textContent += ` ${op} `;
        }else{
            displayInput.textContent = ""
            displayInput.textContent += result + ` ${op} `;
        }
        isOperatorClicked = true;
        handleClick();
    },)
})

// EQUALS BUTTON =====================

const equalbtn = document.querySelector('#equals-btn');
equalbtn.addEventListener('click',()=>{
    let inputNumber = displayInput.textContent;
        let splitValues = inputNumber.split(" ");
        let a = splitValues[0];
        let b = splitValues[2]
        let opr = splitValues[1]
        result = operate(a,b,opr)
        displayInputTwo.textContent = result.toFixed(3);
        isOperatorClicked = false;
        handleClick();
        count++; 
});

// RESET BUTTON =======================

const resetbtn = document.querySelector('#allclear-btn');
resetbtn.addEventListener('click',() => {
    displayInput.textContent = "";
    displayInputTwo.textContent = "";
    count = 0;
})

// BACKSPACE BUTTON ===================

const bkspace = document.querySelector('#cancel-btn');
bkspace.addEventListener('click',()=>{
    displayInput.textContent = displayInput.textContent.slice(0,-1)
})