var  getvalue;

function focusip(e){
    getvalue = document.getElementById(e);
}


var nhap = function(e){
    var numberIn = document.getElementById(e).value;
    getvalue.value += numberIn;
}


const ip1 = document.querySelector('#soa');
const ip2 = document.querySelector('#sob');
var kq;

function Cong() {
    kq= parseInt(ip1.value) + parseInt(ip2.value);
    document.getElementById('sum').style.backgroundColor="#00FFAA";
}

function Tru() {
    kq= parseInt(ip1.value) - parseInt(ip2.value);
}

function Nhan() {
    kq= parseInt(ip1.value) * parseInt(ip2.value);
}

function Chia() {
    kq= parseInt(ip1.value) / parseInt(ip2.value);
}

function result(){
  document.querySelector('.result').value = kq;
}
