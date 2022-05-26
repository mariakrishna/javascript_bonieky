//função é um conjuntos de códigos ex= um botão que roda vários códigos

function alterar(titulo /*aqui se coloca os parâmetros da função*/) {
  document.getElementById("titulo").innerHTML = titulo;
  document.getElementById("campo").placeholder = "levihan";
} //criação da função. é diferente de usa-la.

alterar("Levihan <3"); //executa a função

alert("Levihan é canon!"); //função do js

function somar(x, y) {
  let total = x + y;

  return total;
}

var resultado = somar(10, 15);
