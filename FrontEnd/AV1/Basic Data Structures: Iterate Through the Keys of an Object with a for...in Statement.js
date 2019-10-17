let users = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function countOnline(obj) {
  // change code below this line
let n=0;
for (let user in users){
  
  let resp=obj[user].online;
  (resp==true)?n++:false
}
return n;



  // change code above this line
}

console.log(countOnline(users));