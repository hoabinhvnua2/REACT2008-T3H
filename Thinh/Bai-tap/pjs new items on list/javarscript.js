var danhSach = ['Vàng', 'Đỏ'];

function showList(){
    for (let index = 0; index < danhSach.length; index++) {
        const element = danhSach[index];
        document.getElementById("theP").innerHTML += ("- " + element + "</br>");
    }
}
function addItem(){
    var thanhPhan = document.getElementById('nhap').value;
    var themThanhPhan = danhSach.push(thanhPhan);
    var newTp = danhSach[danhSach.length - 1 ];
    document.getElementById('theP').innerHTML += ("- " + newTp + "</br>");
    document.getElementById('nhap').value = null;
}