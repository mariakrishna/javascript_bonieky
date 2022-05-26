document.querySelector(".texto").offsetWidth; //leva em conta não apenas o conteudo, mas o padding, a border, e a margin
document.querySelector(".texto").offsetHeight;

document.querySelector(".texto").clientWidth; //pega apenas a largura do contudo, excluindo o scroll bar e o padding

document.querySelector(".texto").scrollHeight; //pega o tamanho real do conteudo, no caso do exemplo, o texto. tamanho real do conteúdo

document.querySelector(".texto").scrollTop; //mostra a posição desde o top
document.querySelector(".texto").scrollLeft; //scroll lateral

window.scrollY; //vertical
window.scrollX; //horizontal

document.querySelector(".texto").scrollTo(0, 0); //leva o scroll de volta para o topo do elemento
window.scrollTo(0, 0); //leva o scroll de volta para o topo da pagina

// scroll da janela = window

// scroll do elemnto = elemento

function subirTela() {
  window.scrollTo(0, 0);
} //scroll hard

function subirTela() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
} //scroll smooth - processo gradativo

function ButtonScroll() {
  if (window.scrollY === 0) {
    //oculta o botão
    document.querySelector(".scroll-btn").style.display = "none";
  } else {
    //mostrar o botão
    document.querySelector(".scroll-btn").style.display = "block";
  }
}

window.addEventListener("scroll", ButtonScroll);
//setInterval(ButtonScroll, 1000);
