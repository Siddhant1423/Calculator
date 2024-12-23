const add = (a, b) => {
    return a + b;
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

const getOperand = () =>{
    
}
const displayInput = document.querySelector("#display-one")

const btn = document.querySelectorAll('.btn-number');
btn.forEach((button)=>{
    button.addEventListener("click",()=>{
        let value = button.getAttribute('id')
        displayInput.textContent += value;
        console.log(value);
    })

});

const btnOperand = document.querySelectorAll(".operator");
btnOperand.forEach((button)=>{
    button.addEventListener('click',() => {
        let op = button.getAttribute('data-value')
        displayInput.textContent += " "+op+" ";
        console.log(op)
    })
})