function clock(){

    var today = new Date();
    
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    
    
    if (hours >= 12){
      meridiem = " PM";
    }
    else {
      meridiem = " AM";
    }
    

    if (hours>12){
        hours = hours - 12;
    }
    else if (hours===0){
        hours = 12;	
    }
    
    if (minutes<10){
        minutes = "0" + minutes;
    }
    else {
        minutes = minutes;
    }
    
    if (seconds<10){
        seconds = "0" + seconds;
    }
    else {
        seconds = seconds;
    }
    
    
    document.getElementById("clock").innerHTML = (hours + ":" + minutes + ":" + seconds + meridiem);
    
    }
    
    
    setInterval('clock()', 1000);