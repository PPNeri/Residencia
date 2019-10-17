let notas=[7.8,6.3,8.7];
let alunos=["Victor","Paulo","New"]
let soma=0;
for (let i=0;i<notas.length;i++){

    console.log(`Aluno ${alunos[i]} Nota ${notas[i]}`);
}

i=0;

function avg(){
while (i < notas.length){

    soma+=notas[i];
    i++;

}

let media=soma/notas.length;

return media.toFixed(2);
}

console.log(`A media das notas é de ${avg()} `);
