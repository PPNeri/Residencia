let a=10;
let b=20;
let resultado;

for(var i = 0; i < 1; i++){
    resultado=a+b;
    console.log("resultado da soma foi: ",resultado);
    resultado=a-b;
    console.log("resultado da subtração foi: ",resultado);
    resultado=a*b;
    console.log("resultado da multiplicação foi: ",resultado);
    resultado=a/b;
    console.log("resultado da divisão foi: ",resultado);
    //resultado=b%a;
    //console.log("resultado do resto foi: ",resultado);
    resultado +=b;
    console.log("resultado do incremento de b no resultado foi: ",resultado);
    resultado=a++;
    console.log("Valor do resultado =%d e novo valor de A %d",resultado,a);
    resultado=++b;
    console.log("resultado =%d e b =%d",resultado,b);
}

if ( typeof a ==  typeof b){
    resultado=true;
    console.log(resultado);
}else{
    resultado=false;
    console.log(resultado);
}