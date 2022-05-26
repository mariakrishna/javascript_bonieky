document.querySelector("texto").offsetWidth; //leva em conta não apenas o conteudo, mas o padding, a border, e a margin
document.querySelector("texto").offsetHeight;

document.querySelector("texto").clientWidth; //pega apenas a largura do contudo, excluindo o scroll bar e o padding

document.querySelector("texto").scrollHeight; //pega o tamanho real do conteudo, no caso do exemplo, o texto. tamanho real do conteúdo
