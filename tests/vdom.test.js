import { vDom } from "../core/vdom";

/** @jsx vDom.createElement */
const App = () => (
  <div class="wrapper">
    <h1 class="h1">Hello from virtual dom</h1>
  </div>
);

const container = document.getElementById("root");
console.log(container, "container");

vDom.render(<App />, container);
