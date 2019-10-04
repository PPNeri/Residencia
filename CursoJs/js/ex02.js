function soma(){

var n1=Number(window.document.getElementById("n1").value)
var n2=Number(window.document.getElementById("n2").value)
var res=document.getElementById("res");
var soma=n1+n2
res.innerHTML=`Resultado : ${soma}`;

}