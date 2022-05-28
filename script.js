//objetos - similar a arrays

//array
let carros = [
  { nome: "fiat", modelo: "palio" },
  { nome: "fiat", modelo: "uno" },
  { nome: "toyota", modelo: "corola" },
];

console.log(carros);
console.log(carros[2].modelo);

//objeto - tem que especificar o nome e valor do item q se quer especificar
let carro = {
  //proriedades
  nome: "fiat",
  modelo: "uno",
  peso: "800kg",
  ligar: function () {
    //console.log("ligando o " + this.modelo);
    this.ligar = true;
    console.log("vrum vrum");
  },
  acelerar: function () {
    if (this.ligar == true) {
      console.log("trrrrrrrr");
    } else {
      console.log(this.nome + " " + this.modelo + " não está ligado");
    }
  },
};

console.log(carro["modelo"]);
console.log(carro.nome);
carro.acelerar();
