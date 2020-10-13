var danhSach = [];



function addItemShow(){
    var list = "";
    var thanhPhan = document.getElementById('nhap').value;
    var ketQua = {
        tphan : thanhPhan, 
    }
    danhSach.push(ketQua);
    var legDS = danhSach.length;
    for (let index = 0; index < legDS; index++) {
        list += "<li>"+danhSach[index].tphan+"</li>"
    }
    document.getElementById('showList').innerHTML = list;
}