import { vDom } from "../core/vdom";

/** @jsx vDom.createElement */
const App = () => (
  <div className="test" onClick="testClick" disabled="false">
    Hello, Virtual DOM withsss
  </div>

);

const container = document.getElementById("root");
vDom.render(<App />, container);
