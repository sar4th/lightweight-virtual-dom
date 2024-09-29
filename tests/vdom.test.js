import { vDom } from "../core/vdom";

/** @jsx vDom.createElement */
const App = () => (
  <div>
    <h1 className="test" onClick="testClick">
      Hello, Virtual DOM with <span className="ptag">JSX!</span>
    </h1>
  </div>
);

const container = document.getElementById("root");
vDom.render(<App />, container);
