function render(element, container) {
  if (typeof element.type === "function") {
    render(element.type(), container);
  }
  var type = element.type,
    children = element.children;
  // Create an element based on the tag name
  var newElement = document.createElement(type);
  var text = document.createTextNode(children);
  newElement.appendChild(text);
  // Append the newly created element to the container, if it exists
  container === null || container === void 0
    ? void 0
    : container.appendChild(newElement);
}

function createElement(type, props, children) {
  return {
    type,
    props,
    children,
  };
}

const vDom = {
  createElement,
  render,
};
/** @jsx vDom.createElement */
const App = () => <h1>Hello, Virtual DOM with JSX!</h1>;
console.log(<App />, "App");

const container = document.getElementById("root");
vDom.render(<App />, container);
