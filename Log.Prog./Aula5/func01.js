//Declaração das variáveis

let input=require('readline-sync')
let a,b,c
raizes=new Array();

//Inicialização das Variáveis

a=input.question("Digite A :")
b=input.question("Digite B :")
c=input.question("Digite C :")

//Implemenatação das funções

//Função retorna o delta da equação
function delta(a,b,c){
let b_quad=Math.pow(b,2);
let delta=Number(b_quad-4*a*c);
return delta;
}
//Função retorna as Raizes
function raiz(){
let del=delta(a,b,c);
if(del<0){
    return "Raiz menor que zero";
}else {
    let root1=(-b+Math.sqrt(del))/(2*a)
    let root2=(-b-Math.sqrt(del))/(2*a)
    raizes.push(root2.toFixed(2),root1.toFixed(2));
    return raizes;
}
}
//Utilização da função
console.log(`Valor de delta ${delta(a,b,c)} raiz(s) ${raiz()}`);
