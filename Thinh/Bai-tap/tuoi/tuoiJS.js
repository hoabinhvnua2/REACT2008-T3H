function tuoi(){
    var times = new Date();
    var years = times.getFullYear();
    var namSinh = document.getElementById("cIn").value;

    if(namSinh < years){
        let yearOld =   years - namSinh;
        document.getElementById("cOut").value = yearOld;
    }
    else
    {
        alert("Năm sinh của bạn bị sai, vui lòng nhập lại");
        document.getElementById("cIn").value = null;
    }
}