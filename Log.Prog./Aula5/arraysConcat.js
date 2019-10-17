const myConcat =(arr1, arr2)=> arr2.concat(arr1).toString();
let c="Tatu";
let b="\eMelado"
let frase=c.concat(b)
// test your code
let a=myConcat([1, 2], [3, 4, 5]);
//console.log(myConcat([1, 2], [3, 4, 5]));
console.log(typeof(a));
console.log(`${a}`);
console.log(`${frase}`);