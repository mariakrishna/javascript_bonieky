// for loop
// for loop array

let carros = ["ferrari", "fusca", "palio", "corolla"];
/*let texto = "";

for (let i = 0; i < 10; i++) {
  //criação de variaveis, verificação e imprementação
  texto = texto + i + "<br />";
}*/

let html = "<ul>";

for (let i in carros) {
  html += "<li>" + carros[i] + "</li>";
}

html += "</ul>";
document.getElementById("demo").innerHTML = html;
