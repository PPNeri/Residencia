let readline = require('readline-sync');
//let num =readline.question("Digite o numero : ");
let temp =readline.question("Digite a temperatura em Celcius : ");
let conv =readline.question("Digite F para farenhit ou K para kelvin:  ");
//let temp_p =readline.question("Digite a temperatura da pessoa : ");
let C=new Number(temp);
let F;
let K;

//--------------------EX01
/*
if( num > 0){
    console.log("Numero maior que zero : ", num);
}else{
    if(num < 0){
        console.log("Numero menor que zero : ",num);
    }else{
        console.log("Numeor é zero : ",num);
    }

    }
*/
//-------------------------EX02
switch(conv){
    
    case "f":
        F=(C*9/5)+32;
        console.log("Temperatura em Fahrenheit : ",F);
        break;
    case "k":
        K=C+273.15;
        console.log("Temperatura em Kelvin : ",K);
        break;
    default:
        console.log("Favor inserir f ou k");
        break;

}

//-------------------------EX03
/*
if(temp_p >= 38){
    console.log("A pessoa esta com febre temperatura : ",temp_p);
}else{
    console.log("A pessoa não esta com febre temperatura Normal: ",temp_p);
}
*/

