import { vDom } from "../core/vdom";

/** @jsx vDom.createElement */
const App = () => (
  <div>
    <h1>Hello, Virtual DOM</h1>
    <button onClick={() => alert("clicked")}>click me</button>
  </div>
);

const container = document.getElementById("root");
console.log(container, "container");

vDom.render(<App />, container);
