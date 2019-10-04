var a=window.document.getElementById("area")
a.addEventListener("click",clicar);
a.addEventListener("mouseenter",entrar);
a.addEventListener("mouseout",sair);


function clicar(){

a.innerText="Clicou!!"
a.style.backgroundColor="red"

}
function entrar(){
a.style.backgroundColor="black"

a.innerText="Entrou"

}
function sair(){
    a.style.backgroundColor="green"
    a.innerText="Saiu"
}