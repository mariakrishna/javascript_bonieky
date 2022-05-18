// outras definições de variávies
// variações criadas em 2015

var nome = "Maria Krishna";
//variável com hoisting - é enviada para o escopo geral da tela e é usada com variaveis globais como a window
let name = "Levi Ackerman";
//acessada pelo escopo direto da página. a variável não pode ser redefinida
const namae = "Hange Zoë";
//variável com valor constante. não pode receber um novo valor, com excessão de arreys e objetos
console.log(window.nome);
console.log(window.name);

if (nome == "Maria Krishna") {
  var idade = 30;
  console.log(idade);
}
