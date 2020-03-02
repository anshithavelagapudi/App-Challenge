document.addEventListener('click', event => {
        if (event.target && event.target.id === 'addButton') { updateWithAdd(event) }
      });

function multiplyBy()
{
        item = document.getElementById("firstNumber").value;
        sizeEach = document.getElementById("secondNumber").value;
        console.log(item);
        console.log(sizeEach);
        document.getElementById("result").innerHTML = item * sizeEach;
}

