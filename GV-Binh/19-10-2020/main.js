// var taskLists;
// var saveTask = localStorage.getItem('tasks');
// var inputTask;
// var itemList;
// taskLists = saveTask ? JSON.parse(saveTask) : [];

// function onInit() {
//     var list = '', taskLenght = taskLists.length;
//     itemList = document.getElementById('itemLists');
//     for (let index = 0; index < taskLenght; index++) {
//         list += '<li class="list-group-item">'+ taskLists[index] +'</li>';
//         itemList.innerHTML = list;
//     }
// }

// function addNewItem(event) {
//     event.preventDefault();
//     inputTask =  document.getElementById('taskName').value;
//     taskLists.unshift(inputTask);
//     localStorage.setItem('tasks', JSON.stringify(taskLists));
//     onInit();
// }

// onInit();

var formValue;

var valueUserName;
var valuePasswword;
var valueEmail;
var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var valueBirtday;
var valueDistrict;
var valueCommune;
var valueProvince;
var ckeckRadio;
var myModal;

var tableLists;

var objLists = [];
// $('.alert').alert('close');

function onChange(e) {
  console.log(e);
  // valueUserName = document.getElementById("userName").value;

  if (e.target.value) {
    document.getElementById(e.target.id).classList.remove('in-valid');
    document.getElementById("userNameValidator").style.display = 'none'; 
  } else {
    document.getElementById("userName").classList.add('in-valid'); 
    document.getElementById("userNameValidator").style.display = 'block';
  }
}

function submitForm(event) {
  event.preventDefault();
  valueUserName = document.getElementById("userName").value;
  valuePasswword = document.getElementById("password").value;
  valueEmail = document.getElementById("inputEmail").value;
  valueBirtday = document.getElementById("inputBỉtday").value;
  valueDistrict = document.getElementById("district").value;
  valueCommune = document.getElementById("commune").value;
  valueProvince = document.getElementById("province").value;
  ckeckRadio = document.getElementsByName("gender");
  tableLists = document.getElementById("myTBody");
  formValue = document.getElementById('registerForm');

  // validation for user name

  if (valueUserName) {
    if (valueUserName.length < 3 || valueUserName.length > 30) {
      // alert("Bạn nhập chưa nhập đúng số ký tự!");
      document.getElementById("userName").classList.add('in-valid'); 
      return false;
    }
  } else {
    // alert("Bạn chưa nhập user name");
    document.getElementById("userName").focus();
    document.getElementById("userName").classList.add('in-valid'); 
    document.getElementById("userNameValidator").style.display = 'block'; 
    return false;
  }

  // validation for pass

  if (valuePasswword) {
    if (valuePasswword.length < 3 || valuePasswword.length > 30) {
      alert("Bạn nhập chưa nhập đúng số ký tự!");
      return false;
    }
  } else {
    alert("Bạn chưa nhập password");
    return false;
  }

  // validation for email
  if (valueEmail) {
    if (!mailformat.test(valueEmail)) {
      alert("Bạn chưa nhập đúng định dạng của email");
    }
  } else {
    alert("Bạn chưa nhập email");
    return false;
  }

  // Birtday

  // !valueBirtday ? retrun(alert('Bạn chưa chọn năm sinh')) : true;

  if (!valueBirtday) {
    alert("Bạn chưa chọn ngày sinh");
    return false;
  }

  // District

  if (!valueDistrict) {
    alert("Bạn chưa chọn xã");
    return false;
  }

  // District

  if (!valueCommune) {
    alert("Bạn chưa chọn huyện");
    return false;
  }

  // District

  if (!valueProvince) {
    alert("Bạn chưa chọn tỉnh");
    return false;
  }

  //   gender
  var isCheck = false;
  // ckeckRadio[0].checked === true ||  ckeckRadio[1].checked === true ? alert('bạn đăng ký form thành công') : alert('bạn chưa chọn giới tính');

  for (let index = 0; index < ckeckRadio.length; index++) {
    if (ckeckRadio[index].checked) {
      isCheck = true;
      valueRadio = ckeckRadio[index].value;
    }
  }

  if (isCheck) {
    var result = {
      userName: valueUserName,
      email: valueEmail,
      birtday: valueBirtday,
      district: valueDistrict,
      commune: valueCommune,
      province: valueProvince,
      gender: valueRadio,
    };

    objLists.push(result);
    console.log(objLists);

    var objLength = objLists.length;
    var text = '';
    if(objLists.length > 0) {
      for (let index = 0; index < objLength; index++) {
        text += '<tr>'+ '<td>'+ ( index + 1 )+ '</td>'+ '<td>' + objLists[index].userName +'</td>'+
          '<td>' + objLists[index].email + '</td>'+
          '<td>' + objLists[index].birtday  + '</td>'+
          '<td>' + objLists[index].district + objLists[index].commune + objLists[index].province +'</td>'+
          '<td>'+objLists[index].gender+'</td>'+'</tr>';
      }

      tableLists.innerHTML = text;
    }
    document.getElementById('registerForm').classList.add('custom-opacity');
    document.getElementById('spinnerModal').style.display = 'block';

    setTimeout(function() {

      $("#myModal").modal("hide");
      formValue.reset();
      document.getElementById('registerForm').classList.remove('custom-opacity');
      document.getElementById('spinnerModal').style.display = 'none';
    }, 2000);

  } else {
    alert("bạn chưa chọn giới tính");
  }





  // if (valuePasswword && (valuePasswword.length < 3 || valuePasswword.length >30)) {
  //     console.log(valuePasswword.length);
  //     alert('Bạn nhập chưa nhập đúng số ký tự!');
  //     return true;
  // } else if(valuePasswword) {
  //     return true;
  // } else {
  //     alert('Bạn chưa nhập passwword');
  // }

  // alert('Bạn chưa nhập user name')

  // $('#exampleModal').modal('hide');

  // console.log(event);


  // console.log(formValue);
  // var valueLength = formValue.length;
  // for (let index = 0; index < valueLength; index++) {
  //     console.log(formValue[index].value);
  //     if (formValue[index].name === 'gender') {
  // if (formValue[index].checked === false) {
  //     alert('Gender chưa được chọn');
  //     return false;
  // }
  //     console.log(document.getElementsByName(formValue[index].name));
  // }
  // if (formValue[index].value === null || formValue[index].value === undefined) {
  //     console.log('dừng lại');
  // } else {
  //     console.log('tiếp tục');
  // }

  // if (formValue[index].name === 'userName') {
  //     console.log(formValue[index].value);
  // }
  // }
}
