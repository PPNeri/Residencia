var A ="A Global";
B ='B global';

function funcX(){

    let A="A local funcx";
    console.log("\nPrint dentro da função funcX :",A);
    console.log("\nPrint dentro da função funcX :",B);

return A;
}

function funcY(){

    B="\nB global modificado"
    return B;


}

console.log("\nGlobal B :",B)
console.log("\nChamada da função X")
console.log(funcX());
console.log("\nChamada da função FuncY")
console.log(funcY())
console.log("\nGlobal A : ",A)