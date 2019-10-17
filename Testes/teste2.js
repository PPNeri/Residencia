let users = [{
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
      online: false
    },
    Ryan: {
      age: 19,
      online: true
    }
  }];
  
  function countOnline(obj) {
    // change code below this line
  
    // change code above this line
  

}


let n=0;
for (let values in users){
    let resp=users[values].online;
    if (resp==true){
      n++;
    }
  }
  console.log(n);

  let a=users.split("");
  console.log(a);

  
    
    


  
  //console.log(countOnline(users));