
function BMI(){
var mCanNang = 70,
    mChieuCao = 1.7,
    tCanNang = 60,
    tChieuCao = 1.65,
    mBMI = mCanNang/(mChieuCao*mChieuCao),
    tBMI = tCanNang/(tChieuCao*tChieuCao);

    console.log('Chỉ số BMI của Minh là: ' + mBMI);
    console.log('Chỉ số BMI của Minh là: ' + tBMI);

    if(mBMI > tBMI){
    console.log('Chỉ số BMI của Minh lớn hơn của Toàn');
    }
else{
    console.log('Chỉ số BMI của Toàn lớn hơn của Minh');
}

}
BMI();
      
function soNguyenTo(number){
    var number = document.getElementById('number').value;
    var flag = true;
    if(number < 2){
        flag = false;
    }
    else if(number == 2){
        flag = true;
    }
    else if(number % 2 == 0){
        flag = false;
    }
    else{
        for (var i = 2; i < number-1; i++){
            if (number % i == 0){
            flag = false;
            break;
            }
        }
    }
    if (flag == true){
        alert(number + " là số nguyên tố!!!");
    }
    else{
        alert(number + " không phải là số nguyên tố!!!");
    }
}

//Máy tính
function mayTinh(){
    var ketQua = document.getElementById('calResult'),
        cButton = document.querySelectorAll('#cal-button input'),
        phepCong = document.getElementById('plus'),
        xoaValue = document.getElementById('clean'),
        flag = false;

        for (var input of cButton) {
                input.addEventListener('click', function(e) {
                    if(flag==true){
                        ketQua.value='';
                    }
                    ketQua.value += this.value;
                    flag = false;
            });
        }
        
        phepCong.addEventListener('click', function(e){
            reKetQua = ketQua.value.replace("=","");
            ketQua.value = eval(reKetQua);
            flag = true;
        });

        xoaValue.addEventListener('click', function(e){
            ketQua.value='';
        });
}

mayTinh();