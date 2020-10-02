
function calc_Click(butnValue) {
    form.displayResult.value += butnValue;
}

function calcClear() {
    form.displayResult.value = "";
}

function calcAdd(add) {
    form.displayResult.value += add;
}

function calcSub(sub) {
    form.displayResult.value += sub;
}

function calcMul(mul) {
    form.displayResult.value += mul;
}

function calDiv(div) {
    form.displayResult.value += div;
}

function equalMethod(equal) {
    form.displayResult.value = parseInt(form.displayResult.value);
}
