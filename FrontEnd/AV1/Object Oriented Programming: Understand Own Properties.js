function Bird(name) {
    this.name = name;
    this.numLegs=2;
    this.something;
  }

  
  let canary = new Bird("Tweety");
  let ownProps = [];
  let nownProps=[];

  // Add your code below this line
  
  for (let property in canary) {
    if(canary.hasOwnProperty(property)) {
      ownProps.push(property);
    }else{
        nownProps.push(property);
    }
  }
  //console.log(canary.name);
  
  console.log(ownProps);
  console.log(nownProps);
  
  