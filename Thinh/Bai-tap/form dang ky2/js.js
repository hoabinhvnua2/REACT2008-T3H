function kiemTraEmail(x){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(x.value) == false) 
    {
        return false;
    }

    return true;
}

function hoanThanh(){
    var email = document.getElementById('inputEmail');
    var sinhNhat = document.getElementById('inputState');
    var thPho = document.getElementById('inputTP');
    var fname = document.getElementById('inputFirstName');
    var lname = document.getElementById('inputLastName');
    var nam = document.getElementById('exampleRadios1').checked;
    var gtinh;

    if (nam == true) {
        gtinh = "Nam";
    }
    else{
        gtinh = "Nữ";
    }
    
    // localStorage.removeItem('fname');
    // localStorage.removeItem('lname');
    // localStorage.removeItem('sinhNhat');
    // localStorage.removeItem('email');
    // localStorage.removeItem('que');
    // localStorage.removeItem('gioiTinh');
    
    var valEm = email.value;
    var valSN = sinhNhat.options[sinhNhat.selectedIndex].value;
    var textSN = sinhNhat.options[sinhNhat.selectedIndex].text;

    var valTP = thPho.options[thPho.selectedIndex].value;
    var textTP = thPho.options[thPho.selectedIndex].text;

    if (fname && fname.value) {
        document.getElementById("p-1").style.display = "none";
        fname.style.borderBottomColor = "#CED4DA";
    }
    else
    {
        fname.style.borderBottomColor = "red";
        document.getElementById("p-1").style.display = "block";
    }
    if (lname && lname.value) {
            document.getElementById("p-2").style.display = "none";
            lname.style.borderBottomColor = "#CED4DA";
    }
    else
    {
        lname.style.borderBottomColor = "red";
        document.getElementById("p-2").style.display = "block";
    }

    var x = document.getElementById('inputFirstName').length;
    console.log(x);
    
    if (email && email.value) {
        document.getElementById("p-3").style.display = "none";
        email.style.borderBottomColor = "#CED4DA";

    }
    else{
        email.style.borderBottomColor = "red";
        document.getElementById("p-3").style.display = "block";
    }
    if (kiemTraEmail(email) == true) {
        document.getElementById("p-31").style.display = "none";
        email.style.borderBottomColor = "#CED4DA";
    }
    else{
        document.getElementById("p-31").style.display = "block";
        email.style.borderBottomColor = "red";
    }
    if (valSN == "Chọn năm sinh") {
        document.getElementById("p-4").style.display = "block";
    }
    if (valTP == "Chọn Thành Phố") {
        document.getElementById("p-5").style.display = "block";

    }
    if (email && email.value && kiemTraEmail(email) == true && fname && fname.value && valTP != "Chọn Thành Phố" && valSN != "Chọn năm sinh"){
        // localStorage.setItem('fname', fname.value);
        // localStorage.setItem('lname', lname.value);
        // localStorage.setItem('gioiTinh', gtinh);
        // localStorage.setItem('sinhNhat', valSN);
        // localStorage.setItem('que', valTP);
        // localStorage.setItem('email', email.value);

        document.getElementById('exampleModal').style.display = "none";
        var itemList = document.getElementById('listShow');
        itemList.innerHTML +="<tr><td>"+fname.value+"</td><td>"+lname.value+"</td><td>"+sinhNhat.value+"</td><td>"+gtinh+"</td><td>"+email.value+"</td><td>"+thPho.value+"</td></tr>";

}    
}
function clearForm(){
    document.getElementById('inputEmail').value = null;
    document.getElementById('inputState').value = "Chọn năm sinh";
    document.getElementById('inputTP').value = "Chọn Thành Phố";
    document.getElementById('inputFirstName').value = null;
    document.getElementById('inputLastName').value = null;

}