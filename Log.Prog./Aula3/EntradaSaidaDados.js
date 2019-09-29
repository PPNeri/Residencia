
function funcJS(form_html){
console.log(funcJS);
form_html.saida_dados.value=form_html.entrada_dados.value;

}

function funcJS_ById() {
console.log(funcJS_ById);
document.getElementById('id_saida_dados').value=document.getElementById('id_entrada_dados').value;

}

function calc(){
let x=document.getElementById("val_Produto").value;
let y=document.getElementById("qut_Produto").value;
let result=x*y;
document.getElementById("total").value=result;
}

function trocah2(){

    document.getElementById("h1").innerHTML="Troquei!!!";
}