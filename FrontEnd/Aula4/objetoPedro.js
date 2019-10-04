    

var alunos=[{ 
    nome:"Pedro",
    idade:17,       
    peso:120,
    nota:7.0
    },
    {
        nome:"Luiz",
        idade:17,
        peso:25.5,
        nota:0.0
    },
    {
        nome:"Maria",
        idade:35,
        peso:100.5,
        nota:4.0
    }];

alunos.forEach(function(value){
    if(value.nota < 5){
        nome.innerHTML+=  `<br>${value.nome}  Nota ${value.nota} Reprovado</br>`;
    }else{
        nome.innerHTML+=`<br>${value.nome} Nota ${value.nota}  Aprovado </br>`;
    }
});


