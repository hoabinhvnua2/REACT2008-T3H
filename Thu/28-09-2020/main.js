var arr = [];
var num1;
var num2;
function getnumber1(e)
{
    num1 = parseInt(e.target.value);
    arr.push(num1);
}
function pusharr(e)
{
    var arrayLen = arr.length;
    for (let index = 0; index < arrayLen; index++) {
        if((typeof arr[index]) == "string")
        {
            arr.splice(index,1);
            console.log(arr);
            break;
        }
    }

    if(e.target.value == "+")
    {
        arr.push("+");
    }
    else if(e.target.value == "-")
    {
        arr.push("-");
    }
    else if(e.target.value == "*")
    {
        arr.push("*");
    }
    else if(e.target.value == "/")
    {
        arr.push("/");
    }
}
function getnumber2(e)
{
    num2 = parseInt(e.target.value);
    arr.push(num2);
}
function resetInput()
{
    if(parseInt(document.getElementById("number1").value) != "")
    {
        document.getElementById("number1").value = " ";
    }
    if(parseInt(document.getElementById("number2").value) != "")
    {
        document.getElementById("number2").value = " ";
    }
    if(parseInt(document.getElementById("result").value) != "")
    {
        document.getElementById("result").value = " ";
    }
    arr = [];
}

function cal()
{
    var arrayLen = arr.length;
    for (let index = 0; index < arrayLen; index++) {
        if(arr[index] == "+")
        {
            document.getElementById("result").value = num1 + num2;
        }
        else if(arr[index] == "-")
        {
            document.getElementById("result").value = num1 - num2;
        }
        else if(arr[index] == "*")
        {
            document.getElementById("result").value = num1 * num2;
        }
        else if(arr[index] == "/")
        {
            document.getElementById("result").value = num1 / num2;
        }
    }
}