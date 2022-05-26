function trocarImagem(filename, animalName) {
  document.querySelector(".img").setAttribute("src", "img/" + filename);
  // insere um valor em um atributo
  document.querySelector(".img").setAttribute("data-animal", animalName);
}
function pegarAnimal() {
  let animal = document.querySelector(".img").getAttribute("data-animal");
  alert("the animal is " + animal);
}
