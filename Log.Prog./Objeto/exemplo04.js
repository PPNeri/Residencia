let input=require('readline-sync');
let numeros=[10];
let maior=0;

for (let i=0;i<10;i++){

let elemento=Number(input.question("Digite um numero-->"));
numeros.push(elemento);

if(maior<elemento){
    maior=elemento;
}



}
console.log("Maior numero digitado foi :"+maior);
console.log("Maior numero digitado foi :",numeros);