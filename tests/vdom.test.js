import { vDom } from "../core/vdom";

/** @jsx vDom.createElement */
const App = () => (
  <h1 className="test" onClick="testClick">
    Hello, Virtual DOM withsss
  </h1>
);

const container = document.getElementById("root");
vDom.render(<App />, container);
