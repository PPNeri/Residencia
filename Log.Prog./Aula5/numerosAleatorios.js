let dif,resp,ale,min=10,max=25
dif=max-min;

for(let i=0;i<10;i++){

ale=Math.floor(Math.random()*(dif+1))+min;

(ale % 2==0)? resp="Par":resp="impar";

console.log(`Item${i}-> numero ${ale} é ${resp}`)

}