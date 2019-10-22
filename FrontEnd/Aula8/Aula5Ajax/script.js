function loadData() {

    var xhttp = new XMLHttpRequest();
    //document.getElementById("tipo").innerHTML=typeof(xhttp);

  xhttp.onreadystatechange = function() {
    
    if (this.readyState == 4 && this.status == 200) {
      //document.getElementById("demo").innerHTML =
      var resposta = JSON.parse(this.responseText);

      document.getElementById("demo").innerHTML = 
        "<p>"+resposta.logradouro+"</p>"+
        "<p>"+resposta.bairro+"</p>"+
        "<p>"+resposta.localidade+"</p>";
      
    }
  };

  xhttp.open("GET", 
    "https://viacep.com.br/ws/"+cep.value+"/json/", true);
  xhttp.send();
}
