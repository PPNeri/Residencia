// Example
function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
  }
  
  ourRandomRange(1, 9);
  
  // Only change code below this line.
  
  function randomRange(myMin, myMax) {
    var dif=myMax-myMin;
    for (var i=0;i<10;i++){
    var rand=Math.floor(Math.random()*(dif+1))+myMin;
    console.log(rand);
    }
    return rand; // Change this line
    }
  
  
  // Change these values to test your function
  var myRandom = randomRange(5, 15);