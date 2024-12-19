import { vDom } from "../core/vdom";

/** @jsx vDom.createElement */
const App = () => (
  <h1 className="test" onClick={() => console.log("Clicked!")}>
    Hello, Virtual DOM
  </h1>
);

const container = document.getElementById("root");
console.log(container,"container");

vDom.render(<App />, container);
