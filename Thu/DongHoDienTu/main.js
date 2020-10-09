function clock () {
    var date = new Date;
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("hour").innerHTML = h;
    document.getElementById("min").innerHTML = m;
    document.getElementById("second").innerHTML = s;
    var t = setTimeout(function(){
        clock();
    },1000);
}
function checkTime(a) {
    if(a< 10)
    {
        var a = "0" + a;
        return a;
    }else if(a == a)
    {
        return a;
    }
}
clock ();