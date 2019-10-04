carro = new Object();
/*
carro={modelo:"Gol",
        marca:"Wolkswagen",
        ano:2019};

console.log(carro.ano);
*/

carro1 ={

    nome:"Fusca",
    modelo:"Volks",
    ano:1896


};



carro.modelo="Gol";
carro.marca="Volks";
carro.ano=2020;

//for aprimorado

for (let cont in carro1){

    console.log(carro1[cont]);
}