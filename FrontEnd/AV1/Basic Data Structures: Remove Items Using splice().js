function sumOfTen(arr) {
    // change code below this line
    arr.splice(2,2);
    // change code above this line
    //Como retirei o 3º e o 4º elemento, o array ficou [2,5,2,1] 2,5=a e 2,1=b 7+3=10
    return arr.reduce((a, b) => a + b);//Reduz o array para um unico valor, nesta função
    //vai somar os elementos do vetor da esquerdad para direita.

  }
  
  // do not change code below this line
  console.log(sumOfTen([2, 5, 1, 5, 2, 1]));