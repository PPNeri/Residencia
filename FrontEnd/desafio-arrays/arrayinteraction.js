function carregar(){

let min=50
let max=100
let dif=max-min;
let lista=[];
let listapares=[];
let lista3=[];
let listasoma=[];

function soma(total, value, index, array) {
    return total + value;
  }



function cubic(value, index, array) {
    return Math.pow(value, 3);
  }



for (let i=0;i<30;i++){

let rand=Math.floor(Math.random()*(dif+1))+min;
let newLista=lista.push(rand);

if(rand%2==0){
    listapares.push(rand);
    lista3=listapares.map(cubic);
    listasoma=lista3.reduce(soma);

}

}

console.log(`${lista}`)
console.log(`${listapares}`)
console.log(`${lista3}`)
console.log(`${listasoma}`)

let list=document.getElementById("res")

list.innerHTML=`${lista}`;
list.innerHTML=`${listapares}`
list.innerHTML=`${lista3}`
list.innerHTML=`${listasoma}`


}

carregar();

