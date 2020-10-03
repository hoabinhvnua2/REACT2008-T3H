var operand1;
var operator;
var operand2;
var switchNumber;
var result = document.getElementById('math-result');

function getOperand1() {
    operand1 = document.getElementById("operand-1");
    switchNumber = 1;
}

function getOperator() {
    operator = document.getElementById("operator-1");
    switchNumber = 3;
}

function getOperand2() {
    operand2 = document.getElementById("operand-2");
    switchNumber = 2;
}

function myNumber(number) {
    if(operand1 && switchNumber === 1) {
        operand1.value += number;
    }
    if(operand2 && switchNumber === 2) {
        operand2.value += number;
    }
}

function myOperator(op) {
    operator.value = op;
}

function getDelete() {
    if(operand1 && switchNumber === 1) {
        operand1.value = '';
    }
    if(operand2 && switchNumber === 2) {
        operand2.value = '';
    }
    if(operator && switchNumber === 3) {
        operator.value = '';
    }
}

function getResult() {
    var number1 = parseInt(operand1.value);
    var number2 = parseInt(operand2.value);
    if(operator.value === '+') {
        result.value = number1 + number2;
    }
    if(operator.value === '-') {
        result.value = number1 - number2;
    }
    if(operator.value === 'x') {
        result.value = number1 * number2;
    }
    if(operator.value === '/') {
        result.value = number1 / number2;
    }
}
