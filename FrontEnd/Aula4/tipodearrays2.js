function nextInLine(arr, item) {
    // Your code here
    item=arr.push(item);
    arr.shift();
    
    return item;  // Change this line
  }

  // Test Setup
var testArr = [5,6,7,8,9];




// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 1)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));