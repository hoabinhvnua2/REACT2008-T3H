var formData;
var genderS;
var genderValue;
var listPerson = [];
var list = JSON.parse(localStorage.getItem('list-person'));
var tablePerson = document.getElementById('person-list');

if(list.length > 0) {
    listPerson = list;
}

function render(container, items) {
    var arrPerson = [];
    for(let i = 0; i < items.length; i++) {
        var str = '';
        for(let key in items[i]) {
            if(key != "mật khẩu") {
                str += ("<td>" + items[i][key] + "</td>");
            }
        }
        var result = "<tr>" + str + "</tr>";
        arrPerson.push(result);
    }
    var htmlContent = arrPerson.join(' ');
    container.innerHTML = htmlContent;
}


function selectGender() {
    genderS = document.getElementsByName('giới tính');
    for (let i = 0; i < genderS.length; i++) {
        if(genderS[i].checked) {
            genderValue = genderS[i].value;
            break;
        }
    }
}

render(tablePerson, listPerson);

function myResigter(event) {
    event.preventDefault();
    formData = document.getElementById('resigter').elements;
    var length = formData.length;
    for(let i = 0; i < length - 1; i++) {
        if(formData[i].value === "") {
            alert("Vui lòng điền " + formData[i].name);
            console.log(formData[i].name);
            formData[i].focus();
            return false;
        }
    }
    if(formData[0].value.length < 2 || formData[0].value.length > 30) {
        alert("Vui lòng điền tên đăng nhập trong khoảng 2-30 ký tự");
        formData[0].focus();
        return false;
    }
    if(formData[2].value.indexOf("@gmail.com") === -1) {
        alert("Vui lòng điền đúng định dạng email");
        formData[2].focus();
        return false;
    }
    if(!formData[length - 2].checked && !formData[length - 3].checked) {
        alert("Vui lòng chọn giới tính");
        return false;
    }
    var person = {};
    for(let i = 0; i < length - 3; i++) {
        person[formData[i].name] = formData[i].value;
    }
    person.gender = genderValue;
    console.log(person);
    for( let key in person ) {
        console.log(key + ":" + person[key]);
    }
    alert("Đăng kí thành công");
    listPerson.push(person);
    render(tablePerson, listPerson);
    localStorage.setItem('list-person', JSON.stringify(listPerson));
}




