
var time;

function showTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = "AM";

    if(hours > 12) {
        hours = hours - 12;
        day = "PM";
    }

    if(hours < 10) {
        hours = "0" + hours;
    }

    if(minutes < 10) {
        minutes = "0" + minutes;
    }

    if(seconds < 10) {
        seconds = "0" + seconds;
    }

    time = hours + ":" + minutes + ":" + seconds + " " + day;
    document.getElementById("displayTime").innerHTML = time;

    setTimeout(showTime, 1000);
}

showTime();