var hora = 8;

if (hora < 12) {
  console.log("Bom dia");
} else if (hora < 18) {
  console.log("Boa tarde");
} else if (hora <= 23) {
  console.log("Boa noite");
}
// colocando apenas if vc cria condições independentes.
//o else if faz ele ignorar os outros caso a condição seja satisfeita

var hora = 6;
if (hora >= 12 && hora < 18) {
  console.log("Boa tarde");
}

var hora = 12;
if (hora == 12 || hora == 18) {
  console.log("É hora do rush");
}
