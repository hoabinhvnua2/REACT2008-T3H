var formData;


function myResigter(event) {
    event.preventDefault();
    formData = document.getElementById('resigter').elements;
    var length = formData.length;
    console.log(formData);
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
    alert("Đăng kí thành công");
}