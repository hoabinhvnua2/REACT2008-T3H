var _isfocus;   
var _iscalc = '#';
var aresult ;
//Co xac dinh
function isfocus(val){
    _isfocus = val;
 }

function addValue(val){
    var ainput1;
    var ainput2;
    
    if(_isfocus == -1)
    {
        if(val != 'clear' && val != '+'  && val != '-' && val != '*'  && val != '/')
        {
            ainput1 =  document.getElementById("input1").value;
            if(ainput1 == 0)
              document.getElementById("input1").value = val;
            else
              document.getElementById("input1").value +=  val;
        }
        
    }
    else if(_isfocus == -2)
    {
        if(val != 'clear' && val != '+'  && val != '-' && val != '*'  && val != '/')
        {
            ainput2 =  document.getElementById("input2").value;
            if(ainput2 == 0)
                document.getElementById("input2").value = val;
            else
                document.getElementById("input2").value +=  val;
        }
    }
    
    ainput1 =  document.getElementById("input1").value;
    ainput2 =  document.getElementById("input2").value;
   
   if(!ainput1 || !ainput2){
     return;
   }
 
 // Tinh toan
   if(val == '+')
   {
      _iscalc = '+';
      _isfocus = 0;
      aresult = parseInt(ainput1) + parseInt(ainput2); 
   }
   else if(val == '-'){
      _iscalc = '-';
      _isfocus = 0;
      aresult = parseInt(ainput1) - parseInt(ainput2);
   }
   else if(val == '*'){
      _iscalc = '*';
      _isfocus = 0;
      aresult = parseInt(ainput1) * parseInt(ainput2);
   }
   else if(val == '/'){
      _iscalc = '/';
      _isfocus = 0;
      aresult = parseInt(ainput1) / parseInt(ainput2);
     
   }
   else if(val == 'clear'){ 
       _isfocus = 0;
       document.getElementById("display").value =  "";
       document.getElementById("input1").value =  "";
       document.getElementById("input2").value =  "";
   }
   
   if(val == '=')
   {
       _isfocus = 0;
       document.getElementById("display").value =  aresult;
   }
       
}

