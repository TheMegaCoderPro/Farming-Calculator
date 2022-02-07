var number_1 = Number(document.getElementById("firstno").value);
function calculate() {
number_1 = Number(document.getElementById("firstno").value);

var area = number_1 * number_1;
var perimeter  = number_1 * 4;

document.getElementById("lblArea").innerHTML = area;

document.getElementById("lblPerimeter").innerHTML = area;
  
}


