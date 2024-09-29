function render(element, container) {
  var type = element.type,
    childern = element.childern;
  // Create an element based on the tag name
  var newElement = document.createElement(type);
  var text = document.createTextNode(childern);
  newElement.appendChild(text);

  // Append the newly created element to the container, if it exists
  container === null || container === void 0
    ? void 0
    : container.appendChild(newElement);
}

function createElemet(type, props, childern) {
  return {
    type,
    props,
    childern,
  };
}
const vDom = {
  createElemet,
  render,
};
const testingEL = vDom.createElemet("h1", {}, [
  "This is a Element Create Created with vdom ",
]);
const container = document.getElementById("root");
vDom.render(testingEL, container);
