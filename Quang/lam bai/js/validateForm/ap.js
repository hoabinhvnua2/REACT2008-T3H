var ursValue, pwdValue, pwdcValue, dateValue, emailValue;
var natiValue, cityValue, phoneValue, genderValue, myForm;
var valueList = [];
var valueObject = {};
var saveTask = localStorage.getItem("tasks");

valueList = saveTask ? JSON.parse(saveTask) : [];

// Print funtion
function print(){
    let text = "";
    let printValue = document.getElementById("tbody");
        for (let index = 0; index < valueList.length; index++) {
            text+= "<tr>" + "<td>" + (index + 1) + "</td>"
            + "<td>" + valueList[index].name + "</td>"
            + "<td>" + valueList[index].date + "</td>"
            + "<td>" + valueList[index].email + "</td>"
            + "<td>" + valueList[index].gender + "</td>"
            + "<td>" + valueList[index].national + "</td>"
            + "<td>" + valueList[index].city + "</td>"
            + "<td>" + valueList[index].phone + "</td>" + "</tr>";
            printValue.innerHTML = text;
        };
}

print();

// error function
function errorValue(id){
    let getId = document.getElementById(id);
    getId.scrollIntoView();
    getId.style.borderColor = "red";
    getId.setAttribute("placeholder" , "Error!!!");
    getId.classList.add("errorAnimate");
};

function checkForm(event){
    event.preventDefault();
    myForm = document.getElementById("myForm");

// check name
    ursValue = document.getElementById("usr").value;
    if(!ursValue || ursValue.length <= 2 || ursValue.length >30){
        alert("Please enter your full name from 3 to 30 characters!!!");
        errorValue("usr");
        return false;
    }else document.getElementById("usr").style.borderColor = "";


// check pass
    pwdValue = document.getElementById("pwd").value;
    if(!pwdValue || pwdValue.length <= 6 || pwdValue.length >20){
        alert("Please enter your password from 6 to 20 characters!!!");
        errorValue("pwd");
        return false;
    }else document.getElementById("pwd").style.borderColor = "";

// check pass comfirm 
    pwdcValue =  document.getElementById("pwdc").value;
    if(pwdValue != pwdcValue){
        alert("Your password not correct!!!");
        errorValue("pwdc");
        return false;
    }else document.getElementById("pwdc").style.borderColor = "";

// check date
    dateValue  = document.getElementById("date").value;
    if(!dateValue){
        alert("Please choice your date of birth!!!");
        errorValue("date");
        return false;
    }else  document.getElementById("date").style.borderColor = "";

// check email
    emailValue  = document.getElementById("demo").value;
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!regex.test(emailValue)){
        alert("This is not a email!!!");
        errorValue("demo");
        return false;
    }else document.getElementById("demo").style.borderColor = "";

// check gender
    let genderCheck = document.getElementsByName("optradio");
    let genderCheckLen = genderCheck.length;
    let noCheck = false;
    for(let i = 0 ; i < genderCheckLen; i++){
        if(genderCheck[i].checked){
            noCheck = true;
            genderValue = genderCheck[i].value;
        }
    }
    if(noCheck == false){
        alert("Choice your gender!!!");
        errorValue("gender");
        return noCheck;
    }

// check national
    natiValue  = document.getElementById("national").value;
    if(natiValue == "0"){
        alert("Select your naitionnal!!!");
        errorValue("national");
        return false;
    }else document.getElementById("national").style.borderColor = "";

// check city
    cityValue = document.getElementById("city").value;;
    if(cityValue == "0"){
        alert("Select your City!!!");
        errorValue("city");
        return false;
    }else document.getElementById("city").style.borderColor = "";

// check phoneValue
    let comfirm = false;
    phoneValue = document.getElementById("phone").value;
    if(!phoneValue || phoneValue.length <= 8 || phoneValue.length >14){
        alert("Please enter your phone number from 9 to 14 characters!!!");
        errorValue("phone");
        return comfirm;
    }else {
        document.getElementById("phone").style.borderColor = "";
        comfirm = true;
    }

// comfirm , reset and print 
    if(comfirm == true){

        valueObject = {
            name : ursValue,
            date : dateValue,
            email : emailValue,
            gender : genderValue,
            national : natiValue,
            city : cityValue,
            phone : phoneValue
        };

        valueList.push(valueObject);
        localStorage.setItem('tasks',JSON.stringify(valueList));
        // print
        print();
        $("#myModal").modal("hide");
        // reset
        myForm.reset();
        alert("Good job !!!");
    }
    
}