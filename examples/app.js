const newDOm={
    "className": "test",
    "onClick": "testClick",
    // "disabled": "false"
  }
  
  const  oldDOm={
    "className": "test",
    // "onClick": "testClick",
    "disabled": "false"
    
  }
  const isDeepEqual = (newDOm, oldDom) => {
    debugger

    const oldDomArr = Object.keys(oldDom);
    const newDomArr = Object.keys(newDOm);

  
    const miss=[]
    for (var key of oldDomArr) {
     
        if( !newDOm.hasOwnProperty(key)){
            miss.push(key)
        }
    }
    for (var key of newDomArr) {
     
        if( !oldDOm.hasOwnProperty(key)){
            miss.push(key)
        }
    }
    return miss;
  
}
  const isObject = (object) => {
    return object != null && typeof object === "object";
  };
   
  console.log(isDeepEqual(newDOm, oldDOm)); 