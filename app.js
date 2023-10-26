function number(num){
var input = document.getElementById("input").value += num

input.value = num
}

function dlt(){
    var delet = document.getElementById("input").value = ''
}


function result(){
    var input = document.getElementById("input")
    var ans = eval(input.value)

    input.value = ans
}

function clearInput() {
    var input = document.getElementById("input").value;
    input = input.slice(0, -1);
  
    document.getElementById("input").value = input;
}