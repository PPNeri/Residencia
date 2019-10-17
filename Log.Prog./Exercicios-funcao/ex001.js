let a=12;
let b =5;
let c=1;

/*
b=++a*/
b=a++;

console.log(a);
console.log(b);

/*
b=++a;

console.log(a);
console.log(b);
*/
















/* 


let vet=[];
let min=50,max=150;
let dif=max-min;//Range dos numeros aleatorios
const N=50;

//Preenche um vetor de 50 espaços aleatoriamente, colocando negativo os numeros impares
for (let i=0;i<N;i++){
    let ale=Math.floor((Math.random()*(dif+1))+min);
    if(ale%2==0){
        vet.push(ale);
    }else{
        ale=ale*-1;
        vet.push(ale);
    }

}
console.log(vet);
// Aqui o vetor já esta preenchido

function somaneg(arr){
    let soma=0;

    
    for(let i=0;i<arr.length;i++){
        if (arr[i]<0){
            soma+=arr[i];
        }
    
    }
    console.log(soma);
    
}

somaneg(vet);

*/