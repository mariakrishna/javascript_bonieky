//switch - um valor com varias condicionais diferentes

let dia = 3;
let diaNome = "";
switch (dia) {
  case 1:
    diaNome = "monday";
    break;
  case 2:
    diaNome = "tuesday";
    break;
  case 3:
    diaNome = "wednesday";
    break;
  case 4:
    diaNome = "thrusday";
    break;
  case 5:
    diaNome = "friday";
    break;
  case 6:
    diaNome = "saturday";
    break;
  case 7:
    diaNome = "sunday";
    break;
}

document.getElementById("dia").innerHTML = "today is: " + diaNome;
