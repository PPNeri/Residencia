var array=["cat","horse","dog",1,2,3,4,5,5,6,6,7,7,8];
console.log(`li-sta ${array} numero de elementos----> ${array.length}`);
for(i=0;i<=array.length+1;i++){

    array.pop();//retira o ultimo elemento
    array.shift();//Retira o primeiro elemento
    array.push(1);//add o elemnto na ultima posicao do array
    array.unshift(1);//add o elemento na primeira posição do array
    array.splice(posicao,quantidade);//Retira o elemento da posicao e a quantidade a partir dali.
    array.slice(posicaopega,posicaonaopega)//Retorna um array
    console.log(`lista ${array} numero de elementos-------> ${array.length}`);
    (array.length==0)? 
    console.log("Acabou a lista"):false

}
