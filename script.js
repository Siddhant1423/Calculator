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