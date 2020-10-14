var valueLastName;
var valueFirstName;
var valueEmail;
var valueBirthday;
var valueXa;
var EmailFormat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var dateFormat = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
var valueHuyen;
var valueTinh;
var gender;
var formRegister;

var objList = [];


function submitForm(event) {
    event.preventDefault();
    valueLastName = document.querySelector('#inputEmail4').value;
    valueFirstName = document.querySelector('#inputPassword4').value;
    valueEmail = document.querySelector('#inputEmail').value;
    valueBirthday = document.querySelector('#inputBirthday').value;
    valueHuyen = document.querySelector('#inputHuyen').value;
    valueTinh = document.querySelector('#inputTinh').value;
    valueXa = document.querySelector('#inputXa').value;
    gender = document.getElementsByName('gender');
    tableList = document.querySelector('#tableBody');
    formValue = document.querySelector('#formRegister')

    if (valueLastName) {
        if (valueLastName.length < 2 || valueLastName.length > 30) {
            alert('Họ tên phải trên 2 ký tự và nhỏ hơn 30 ký tự');
        }
    } else {
        alert("Bạn chưa nhập username")
    }

    if (valueFirstName) {
        if (valueFirstName.length < 2 || valueFirstName.length > 30) {
            alert('Tên lót phải trên 2 ký tự và nhỏ hơn 30 ký tự');
        }
    } else {
        alert("Bạn chưa nhập FirstName")
    }

    if (valueEmail) {
        if (!EmailFormat.test(valueEmail)) {
            alert("Bạn chưa nhập đúng dịnh dạng email");
        }
    } else {
        alert("Bạn chưa nhập email");
        return false;
    }

    if (valueBirthday) {
        if (!dateFormat.test(valueBirthday)) {
            alert('Bạn chưa nhập đúng định dạng ngày tháng ! ')
        }

    } else {
        alert('Bạn chưa nhập ngày sinh !')
        return false;
    }


    if (!valueXa) {
        alert('Bạn chưa nhập xã');
        return false;
    }
    if (!valueHuyen) {
        alert('Bạn chưa nhập Huyện');
        return false;

    }

    if (!valueTinh) {
        alert('Bạn chưa nhập Tỉnh');
        return false;
    }

    var ischeck = false;
    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            ischeck = true;
            valueradio = gender[i].value;
        }
    }



    if (ischeck) {
        var ketqua = {
            firstName: valueFirstName,
            lastName: valueLastName,
            email: valueEmail,
            birthday: valueBirthday,
            commune: valueXa,
            district: valueHuyen,
            province: valueTinh,
            gt: valueradio
        };
        
        
        var saveList = localStorage.getItem('tableBody');

        List = saveList ? JSON.parse(saveList) : [];

        objList.push(ketqua);
        localStorage.setItem("tableBody", JSON.stringify(objList));
      

        var objLenght = objList.length;
        var listtxt = '';
        if (objList.length > 0) {
            for (let j = 0; j < objLenght; j++) {
                listtxt += '<tr>' + '<td>' + (j + 1) + '</td>' + '<td>' + objList[j].firstName + '</td>' +
                    '<td>' + objList[j].lastName + '</td>' + '<td>' + objList[j].email + '</td>'
                    + '<td>' + objList[j].birthday + '</td>' + '<td>' + objList[j].commune + ' ' + objList[j].district + ' ' + objList[j].province + '</td>'
                    + '<td>' + objList[j].gt + '<td>' + '</tr>';
                    tableList.innerHTML = listtxt;
            }
        

        }

        $('#exampleModal').modal("hide");
        formValue.reset();
        alert("Bạn đã đăng ký thành công !")

    } else {
        alert("Bạn chưa chọn giới tính")
    }






}