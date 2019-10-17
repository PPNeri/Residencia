// Isso é um objeto est
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
    
    // Your Code Here
    let result;
   result = myObj.hasOwnProperty(checkProp);
    if(result==true){
    result=myObj[checkProp];
  }else{
    result="Not Found";
  } 
  return result;
}

// Test your code by modifying these values
console.log(checkObj("a"));