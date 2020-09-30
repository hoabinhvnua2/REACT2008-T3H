var showValue;
function numFocus(e){
    showValue = document.getElementById(e);
}
var myValue = function getValue(e){
    var vlue = document.getElementById(e).value;
    var input1 = document.getElementById("firstNum");
    var input2 = document.getElementById("secondNum");
    var result = document.getElementById("result");
    var math = document.getElementById("math");


        if (vlue == "del"){
            input1.value = "";
            input2.value = "";
            result.value = "";
            math.innerText = "?";
        } 
        else if(vlue == "+" | vlue == "-" | vlue == "*" | vlue == "/")
        {
            math.innerText = vlue;
            math.value = vlue;
        }
        else if (vlue == "=")
        {
            if(math.value == "+")
            {
                    result.value =  Number(input1.value) + Number(input2.value);
            }else if (math.value == "-")
            {
                    result.value =  Number(input1.value) - Number(input2.value);
            }else if (math.value == "*")
            {
                    result.value =  Number(input1.value) * Number(input2.value);
            }else
                    result.value =  Number(input1.value) / Number(input2.value);
        }else{
            showValue.value += vlue;
        };
 };

