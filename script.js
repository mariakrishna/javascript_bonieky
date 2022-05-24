//selecionando elementos na tela
//a partir do id
document.getElementById("exemplo").innerHTML =
  "I love Levihan <button>Yes</button>"; //retorna um elemento único pq o id é único
document.getElementsByClassName("lista")[1].innerHTML = "Levihan Canon"; //sempre retorna um arrey, mesmo que com só um elemento
document.getElementsByTagName("button")[1].innerHTML = "Levi x Hans";
document.getElementsByName("telefone");
