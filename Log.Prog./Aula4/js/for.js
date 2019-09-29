let saida=require('readline-sync');
let resp;
let aux;
console.log("Informe 5 numeros");

for (let i=0;i<5;i++){

    resp=saida.question();
    aux += resp + " ";
    //console.log(i);
   //console.log("Vove digitou : ",resp);

}
console.log("Voce digitou : ",aux);
console.log("That all folks...");