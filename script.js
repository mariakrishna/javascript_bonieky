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
  if (document.querySelector(".semicanon").classList.contains("semicanon")) {
    document.querySelector(".semicanon").classList.remove("semicanon");
    document.querySelector(".semicanon").classList.add("canon");
  }

  if (document.querySelector(".semicanon").classList.contains("canon")) {
    document.querySelector(".semicanon").classList.remove("canon");
    document.querySelector(".semicanon").classList.add("semicanon");
  }
}
