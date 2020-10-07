
function chuyenDoi(e){
       if (e < 10) {
            e = "0" + e;
        }
        return e;
}
function getTime(){
    var times = new Date();
    var gio = times.getHours();
    var phut = times.getMinutes();
    var giay = times.getSeconds();

    gio = chuyenDoi(gio);
    phut = chuyenDoi(phut);
    giay = chuyenDoi(giay);

    document.getElementById("hours").innerHTML = gio;
    document.getElementById("minute").innerHTML = phut;
    document.getElementById("second").innerHTML = giay;


    var t =  setTimeout(function(){
        getTime();
    },1000);
    

}