function clicou() {
  //alert("vc clicou no butão :)");
  //document.getElementById("titulo").innerHTML = "tu mudou o título!";
}

function digitou(e) {
  //console.log(e);
  if (e.keyCode == 13 && e.ctrlKey == true) {
    //enter
    let texto = document.getElementById("campo").value;
    console.log(texto);
  }
}
