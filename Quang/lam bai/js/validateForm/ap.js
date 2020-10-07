
// kiem tra ten
function checkText(e){
    var textValue = document.getElementById(e).value;
    var len = String(textValue).length;
    if (len < 2 || len > 30){
        document.getElementById(e).style.borderColor="red";
        alert("nhap ten tu 2 den 30 ky tu !!!");
    }else{
        document.getElementById(e).style.borderColor="black"
    }
};

// kiem tra email
function checkEmail(e){
    var textValue = document.getElementById(e).value;
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if( !regex.test(textValue)){
        document.getElementById(e).style.borderColor="red";
        alert("Nhap sai dinh dang Email !!!");
    }else{
        document.getElementById(e).style.borderColor="black"
    }
};

//kiem tra gioi tinh
var changedGender = 0;
function gender(){
    changedGender = 1;
};

// kiem tra ngay sinh
var changedBirth = 0;
function birthDay(){
    changedBirth = 1;
}
var queQuanValue = 0;
function queQuan(){
  queQuanValue = document.getElementById("select").value; 
}
// validator
function validator(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value; 
    var email = document.getElementById("email").value; 
    if(firstName == "" || lastName == ""){
        alert("Chua nhap ten !!!");
    }else if(email == ""){
        alert("Chua nhap emali !!!");
    }else if(changedGender == 0){
        alert("Chua chon gioi tinh !!!");
    }else if(changedBirth == 0){
        alert("Chua chon ngay thang nam sinh !!!")
    }else if (queQuanValue == 0){
        alert("Chua chon que quan")
    }else
        alert("Good job")
}