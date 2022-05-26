function canon() {
  document.querySelector("#exemplo").classList.remove("semicanon");
  document.querySelector("#exemplo").classList.remove("not-canon");
  document.querySelector("#exemplo").classList.add("canon");
}

function semicanon() {
  document.querySelector("#exemplo").classList.remove("canon");
  document.querySelector("#exemplo").classList.remove("not-canon");
  document.querySelector("#exemplo").classList.add("semicanon");
}

function notcanon() {
  document.querySelector("#exemplo").classList.remove("semicanon");
  document.querySelector("#exemplo").classList.remove("canon");
  document.querySelector("#exemplo").classList.add("not-canon");
}

function trocar() {
  if (document.querySelector(".preto").classList.contains("preto")) {
    document.querySelector(".preto").classList.remove("preto");
    document.querySelector(".branco").classList.add("branco");
  }

  if (document.querySelector(".branco").classList.contains("branco")) {
    document.querySelector(".branco").classList.remove("branco");
    document.querySelector(".preto").classList.add("preto");
  }
}
// tipos de dados
var nome = "Maria";
var idade = 90;
var salvo = true;

var tipo = typeof idade;
