function findLongestWordLength(str) {
    let maior=0;
    let word=str.split(" ");

word.forEach(element => {
    maior<element.length?maior=element.length:false

});
  console.log(maior);


  //return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
