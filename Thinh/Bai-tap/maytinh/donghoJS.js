var getValue;
var kq;
function focusInput(e){
    getValue = document.getElementById(e);
}
var nhapSo = function(e){
    var numberIn = document.getElementById(e).value;
    getValue.value += numberIn;
}
inputN1 = document.getElementById("input1");
inputN2 = document.getElementById("input2");
var tongCong;
function cong(e){
    document.getElementById(e).style.background = "#00FFAA";
    tongCong = parseInt(input1.value) + parseInt(input2.value);
}
function tru(e){
    document.getElementById(e).style.background = "#00FFAA";
    tongCong = parseInt(inputN1.value) - parseInt(inputN2.value);
}
function nhan(e){
    document.getElementById(e).style.background = "#00FFAA";
    tongCong = parseInt(inputN1.value) * parseInt(inputN2.value);
}
function chia(e){
    document.getElementById(e).style.background = "#00FFAA";
    tongCong = parseInt(input1.value) / parseInt(inputN2.value);
}
function mu(e){
    document.getElementById(e).style.background = "#00FFAA";
    tongCong = Math.pow(parseInt(inputN1.value),parseInt(inputN2.value));
}
function clearAll(){
    inputN1.value = null;
    inputN2.value = null;
}

function ketQuaLa(){
    document.getElementById('ketQua').value = tongCong;
}