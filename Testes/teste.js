const func_p=function(base,expoent){
  let result =1;
  for (let count=0;count<expoent;count++){
    result*=base;
  }
  return result+a;
}
let a=2;
let b=5;
console.log(func_p(a,b));