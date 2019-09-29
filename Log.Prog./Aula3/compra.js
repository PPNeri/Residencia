let readline = require('readline-sync');
let quant =readline.question("Digite a Quantidade : ");
let preco =readline.question("Preço de cada produto : ");
let total=quant*preco;
var continuar=1;

var continuar =readline.question("Deseja continuar? 1-Sim 0-Não :");

while(continuar!=0){
    
    quant =readline.question("Digite a Quantidade : ");
    preco =readline.question("Preço de cada produto : ");
    total+=quant*preco;
    //total+=total;
    var continuar =readline.question("Deseja continuar? 1-Sim 0-Não : ");
}



console.log("O preço total da compra foi de:",total.toFixed(2));