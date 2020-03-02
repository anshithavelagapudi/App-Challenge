function multiplyBy()
{
        num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        console.log(num1);
        console.log(num2);
        document.getElementById("result").innerHTML = num1 * num2;
}