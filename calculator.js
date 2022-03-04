let value1 = document.querySelector('.oper1');
let value2 = document.querySelector('.oper2');
let value3 = document.querySelector('.oper3');
let value4 = document.querySelector('.oper4');
let value5 = document.querySelector('.oper5');
let value6 = document.querySelector('.oper6');
let value7 = document.querySelector('.oper7');
let value8 = document.querySelector('.oper8');
let value9 = document.querySelector('.oper9');
let multiplyOp = document.querySelector('.multiply');
let divideOp = document.querySelector('.divide');
let addOp = document.querySelector('.add');
let subtractOp = document.querySelector('.subtract')
let previous_value = document.querySelector('.previous_value');
let result = document.querySelector('.result');
let clearValue = document.querySelector('.clear');
let showAnswer = document.querySelector('.answer');
let zero = document.querySelector('.zero');

let operation = [];


function displayValue(value){ 
    console.log(operation)
    if(operation.length){
        result.textContent = operation[operation.length - 1];
    }
};

function performArithmetic(){
    let operandTwo = operation.pop();
    let operator = operation.pop();
    let operandOne = operation.pop();

    let opResult = 0;

    console.log(operation);
    console.log(operandOne);
    console.log(operandTwo);
    console.log(operator);
    console.log(operation);

    switch(operator){
        case '*': opResult = operandOne * operandTwo;
        break;
        case '+': opResult = operandOne + operandTwo;
        break;
        case '-': opResult = operandOne - operandTwo;
        break;
        case '/': 
            if(operandTwo === 0){
                opResult = NaN;
                break;
            }else{
                opResult = operandOne / operandTwo;
            }
        break;
        default:
            console.log('###');
            opResult = NaN;
            break;
    }

    if(opResult === undefined || opResult !== opResult){
        console.log('****');
        result.textContent = "ERROR";
        previous_value.textContent = 0;
        operation = [];
    }else{
        console.log(opResult);
        operation.push(opResult);
        previous_value.textContent = opResult;
        displayValue();
        result.textContent = 0;
    }
}


value1.addEventListener('click', () => {
    operation.push(Number(value1.textContent));
    displayValue();
});

value2.addEventListener('click', () => {
    operation.push(Number(value2.textContent));
    displayValue();
})

value3.addEventListener('click', () => {
    operation.push(Number(value3.textContent));
    displayValue();
})

value4.addEventListener('click', () => {
    operation.push(Number(value4.textContent));
    displayValue();
})

value5.addEventListener('click', () => {
    operation.push(Number(value5.textContent));
    displayValue();
})

value6.addEventListener('click', () => {
    operation.push(Number(value6.textContent));
    displayValue();
})

value7.addEventListener('click', () => {
    operation.push(Number(value7.textContent));
    displayValue();
})

value8.addEventListener('click', () => {
    operation.push(Number(value8.textContent));
    displayValue();
})

value9.addEventListener('click', () => {
    operation.push(Number(value9.textContent));
    displayValue();
})

zero.addEventListener('click', () => {
    operation.push(Number(zero.textContent));
    displayValue();
})

multiplyOp.addEventListener('click', () => {
    operation.push(multiplyOp.textContent)
    displayValue();
})

divideOp.addEventListener('click', () => {
    operation.push(divideOp.textContent)
    displayValue();
})

addOp.addEventListener('click', () => {
    operation.push(addOp.textContent)
    displayValue();
})

subtractOp.addEventListener('click', () => {
    operation.push(subtractOp.textContent)
    displayValue();
})

showAnswer.addEventListener('click', () => {
    previous_value.textContent = result.textContent;
    performArithmetic();
})

clearValue.addEventListener('click', () => {
    operation = [];
    result.textContent = 0;
    previous_value.textContent = 0;
})