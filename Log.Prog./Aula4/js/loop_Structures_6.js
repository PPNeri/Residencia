/*let num =50;
//---------------------Modo de fazer A
if(num===50){
    num++;
}else{
    num--
}
console.log("Incremento com IF :",num);
//Modo de fazer B
*/
function calc(){
let text;

let num=document.getElementById("n1").value;
if(num > 50){
    text="Numero maior que 50";
  //  alert(text);
}else{
    text="Numero Menor do que 50";
   //alert(text);
}


//(num == 50)? num++:num--;
document.getElementById("result").value=text;


//alert("ta chamanado");
}