const MEDIA = 5;

//Objetos alunos
var aluno1 = {
    nome: "alan",
    nota: 3
};
var aluno2 = {
    nome: "pedro",
    nota: 5
};

var aluno3 = {
    nome:"joão",
    nota:10
};
//array de alunos
var alunos = [aluno1, aluno2, aluno3];

var alunoMaiorNota;
var alunoMenorNota;
var alunoNotaAcimaCinco;

//fazer for do array 
for(i=0;i<alunos.length;i++){
    if(alunos[i].nota > MEDIA) {
        alunoNotaAcimaCinco = alunos[i];
    }

    if (alunoMaiorNota == undefined){
        alunoMaiorNota = alunos[i];
    }else{
        if (alunos[i].nota > alunoMaiorNota.nota){
            alunoMaiorNota = alunos[i];
        }
    }

    if (alunoMenorNota == undefined){
        alunoMenorNota = alunos[i];
    }else{
        if (alunos[i].nota < alunoMenorNota.nota){
            alunoMenorNota = alunos[i];
        }
    }
}

console.log ("aluno maior que media 5: " + JSON.stringify(alunoNotaAcimaCinco));
console.log("aluno menor nota: " + JSON.stringify(alunoMenorNota));
console.log("aluno maior nota: " + JSON.stringify(alunoMaiorNota));

/*
//funcção para cacular a media
function calcNotas(){
    var media = 5;
    if(nota<5){
        console.log("O"+ aluno.nome +"está abaixo da média");
    }else if(media == 5){
        console.log("O" + aluno.nome +"aluno está na média");
    }else if (nota > 5){
        console.log("O"+ aluno.nome + "aluno está acima da média");
    }
    
    }
    */