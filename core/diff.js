export function diff(oldNode, newNode) {

  if (typeof oldNode === "object" && typeof newNode === "object") {
    //check both child node is string 
    if (
      typeof oldNode.children[0] === "string" &&
      newNode.children[0] === "string"
    ) {
      isIdentical = isBothStringIdentical(
        oldNode.children[0],
        newNode.children[0]
      );
      if (isIdentical) {
        return { status: "noop" };
      } else {
        return {
          type: "STRING",
          status: "REPLACE",
          oldNode,
          newNode,
        };
      }
    }
//check it is a entirely new element
    if (oldNode?.type !== newNode.type) {
      return { status: "REPLACE", type: "ELM_NODE", newNode, oldNode };
    }
//check  only if the props has changed 



  } else {
    return new Error("not valid element");
  }
}

function isBothStringIdentical(str1, str2) {
  return str1 === str2;
}



const object1={
  "className": "test",
  "onClick": "testClick",
  "disabled": "false"
}

const  object2={
  "className": "test",
  "onClick": "testClick",
  
  
}
const isDeepEqual = (object1, object2) => {

  const objKeys1 = Object.keys(object1);
  const objKeys2 = Object.keys(object2);

  if (objKeys1.length !== objKeys2.length) return false;

  for (var key of objKeys1) {
  
    const value1 = object1[key];
    const value2 = object2[key];

    const isObjects = isObject(value1) && isObject(value2);

    if ((isObjects && !isDeepEqual(value1, value2)) ||
      (!isObjects && value1 !== value2)
    ) {
      return false;
    }
  }
  return true;
};

const isObject = (object) => {
  return object != null && typeof object === "object";
};
 
console.log(isDeepEqual(object1, object2)); 