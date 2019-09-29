let readline = require('readline-sync');
let r =readline.question("Digite o raio da base :");
let a =readline.question("Digite a altura do cone : ");
let resultado;
let r_quadrado=Math.pow(r,2);
const PI =Math.PI;
resultado=PI*r_quadrado*a/3;
console.log("O volume do cone é:",resultado.toFixed(2));