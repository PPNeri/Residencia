let readline = require('readline-sync');
let mes =readline.question("Qual mes: ");
//let mes=2;
let meses=["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"];
//-----------------------------Ex1
/*
if(mes===1){
    console.log("Janeiro");
}else{
    if(mes ===2){
        console.log("Fevereiro");
    }else{
        if(mes===3){
            console.log("Março");
        }else{
            console.log("Não é Jan, Fev ou Mar");
        }
    }
}


//--------------------------------------Ex2

if(mes===1)
    console.log("Jan");
if(mes===2)
    console.log("Fev");
if(mes===3)
    console.log("Mar");
if(mes !=1 && mes!=2 && mes!=3)
    console.log("Não é Jan, Fev ou Mar");

*/

for(let x=0;x<meses.length;x++){

    //console.log(meses[x]);
    if(x+1 == mes){
    
        console.log("O mês é : ",meses[x]);
    }
    

}