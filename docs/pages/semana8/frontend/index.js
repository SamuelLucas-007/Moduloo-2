function carregarDescricao() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("descricao").innerHTML = this.responseText;
    }
    xhttp.open("GET", "descricao.txt");
    xhttp.send();
  }