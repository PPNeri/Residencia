let notas=[7.8,6.3,8.7,10,5.6,5.0,10.0,8.0];
let alunos=["Victor","Paulo","N2ew","Luiza","Maria","Gabriela","Pedrita","roberta"];

//Imprime alunos e notas
console.log(`Notas----> ${notas}`);
console.log(`Alunos----> ${alunos}`);
//Imprime o tamanho dos Arrays
console.log(notas.length);
console.log(alunos.length);

//Capturando ultima nota
lastgrade=notas.pop();
console.log("Ultima nota : "+lastgrade);
//Capturando ultimo aluno
laststudent=alunos.pop();
console.log("Umtimo aluno " +laststudent);
//Capturando Primeira nota
firstGrade=notas.shift();
console.log("Primeira nota :" +firstGrade)
//Capturando Primeiro aluno
firstStudent=alunos.shift();
console.log("Primeiro aluno ",firstStudent);
//Remover um elmento da posiçao 2---------(splice)
nota5=notas.slice(2,6);
aluno5=alunos.splice(3,1);
console.log(`5º nota->${nota5} do aluno->${aluno5}`)
