let readline = require('readline-sync');
const k=4.15;
let val_Real =readline.question("Digite a Quantia em reais");
let conv=val_Real/k;
console.log("O valor em dolar foi:",conv.toFixed(2));

