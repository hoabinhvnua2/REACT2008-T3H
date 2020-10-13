var listsShow = [];



function kiemTraEmail(x){
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(x.value) == false) 
    {
        return false;
    }

    return true;
}

function hoanThanh(){
    var itemShowList = document.getElementById('listShow');
    var email = document.getElementById('inputEmail');
    var sinhNhat = document.getElementById('inputState');
    var thPho = document.getElementById('inputTP');
    var fname = document.getElementById('inputFirstName');
    var lname = document.getElementById('inputLastName');
    var nam = document.getElementById('exampleRadios1').checked;
    var nu = document.getElementById('exampleRadios2').checked;
    var gtinh;


    if (nam == true || nu == true) {
        if (nam == true) {
            gtinh = "Nam";
        }
        else{
            gtinh = "Nữ";
        }
        document.getElementById('p-6').style.display = "none";

    }
    else{
        document.getElementById('p-6').style.display = "block";
    }
    
    
    // localStorage.removeItem('fname');
    // localStorage.removeItem('lname');
    // localStorage.removeItem('sinhNhat');
    // localStorage.removeItem('email');
    // localStorage.removeItem('que');
    // localStorage.removeItem('gioiTinh');
    
    var valEm = email.value;

    var valSN = sinhNhat.value;

    var valTP = thPho.value;

    if (fname && fname.value) {
        var fnamevl = fname.value;
        var fnamelg = fnamevl.length;
        if (fnamelg >= 2 && fnamelg < 32) {
            document.getElementById("p-1").style.display = "none";
            document.getElementById("p-11").style.display = "none";
            fname.style.borderBottomColor = "#CED4DA";

        }
        else{
            fname.style.borderBottomColor = "red";
            document.getElementById("p-11").style.display = "block";
        }
    }
    else
    {
        fname.style.borderBottomColor = "red";
        document.getElementById("p-1").style.display = "block";
    }
    
    if (lname && lname.value) {
        var lnamevl = lname.value;
        var lnamelg = lnamevl.length;
        document.getElementById("p-2").style.display = "none";
        if (lnamelg >= 2 && lnamelg < 32) {
            document.getElementById("p-21").style.display = "none";
            lname.style.borderBottomColor = "#CED4DA";
            
        }
        else{
            lname.style.borderBottomColor = "red";
            document.getElementById("p-21").style.display = "block";
        }
    }
    else
    {
        lname.style.borderBottomColor = "red";
        document.getElementById("p-2").style.display = "block";
    }
    
    if (email && email.value) {
        if (kiemTraEmail(email) == true) {
            document.getElementById("p-31").style.display = "none";
            email.style.borderBottomColor = "#CED4DA";

        }
        else{
            document.getElementById("p-31").style.display = "block";
            email.style.borderBottomColor = "red";
        }
    }
    else{
        email.style.borderBottomColor = "red";
        document.getElementById("p-3").style.display = "block";
    }
    
    if (valSN == "Chọn năm sinh") {
        document.getElementById("p-4").style.display = "block";
    }
    else{
    }
    if (valTP == "Chọn Thành Phố") {
        document.getElementById("p-5").style.display = "block";
    }
    else
    {
        
    }
    if (nam == true || nu == true && email && email.value && kiemTraEmail(email) == true && fname && fname.value && valTP != "Chọn Thành Phố" && valSN != "Chọn năm sinh"){
        // localStorage.setItem('fname', fname.value);
        // localStorage.setItem('lname', lname.value);
        // localStorage.setItem('gioiTinh', gtinh);
        // localStorage.setItem('sinhNhat', valSN);
        // localStorage.setItem('que', valTP);
        // localStorage.setItem('email', email.value);
        var lnamevl = lname.value;
        var fnamevl = fname.value;
        var emailvl = email.value;

        var result = {
            firstname : fnamevl,
            lastname : lnamevl,
            emailsave : emailvl,
            sinhnhat : valSN,
            quequan : valTP,
            gioitinh : gtinh,
        };
        listsShow.push(result);
        console.log(listsShow);
        alert('Bạn đã nhập form thành công')
        var list = '';
        var arrayLg = listsShow.length;
        for (let index = 0; index < arrayLg; index++) {
            list += "<tr><td>"+(index+1)+"</td><td>"+listsShow[index].firstname+"</td><td>"+listsShow[index].lastname+"</td><td>"+listsShow[index].sinhnhat+"</td><td>"+listsShow[index].gioitinh+"</td><td>"+listsShow[index].emailsave+"</td><td>"+listsShow[index].quequan+"</td></tr>";            
        }
        itemShowList.innerHTML = list;
        document.getElementById('exampleModal').style.display = "none";

        
        
}    
}
function clearForm(){
    document.getElementById('inputEmail').value = null;
    document.getElementById('inputState').value = "Chọn năm sinh";
    document.getElementById('inputTP').value = "Chọn Thành Phố";
    document.getElementById('inputFirstName').value = null;
    document.getElementById('inputLastName').value = null;
    document.getElementById('exampleRadios1').checked = false;
    document.getElementById('exampleRadios2').checked = false;
}