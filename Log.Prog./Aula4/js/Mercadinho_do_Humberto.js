let input = require('readline-sync');
let cod,qtd,value,total_parcial,desc,total_Geral=0;
const arroz=14.90;
const feijao=3.99;
const ovo=4.79;

for (let i=0;i<10;i++){
    
    cod =Number(input.question("Codigo do Produto : "));//Passando de String to Nunmber
    qtd=Number(input.question("Quantidade :"));//Passando de String to Nunmber


switch(cod){

    case 1:
        value=arroz;
        desc="Arroz";
        break;
    case 2:
        value=feijao;
        desc="Feijão";
        break;
    case 3:
        value=ovo;
        desc="Ovo";
        break;
    default:
        console.log("Produto não cadastrado");
        desc="Não cadastrado";
        value=0;
        break;    
}



total_parcial=qtd*value;

total_Geral+=total_parcial;

let resp =console.log("\n Item %d---------%s-----------%d------------%d------------%d\n",i+1,desc,value,qtd,total_parcial);




}

console.log("\t\t\t\t\t\tTotal----------%d\n",total_Geral.toFixed(2));
