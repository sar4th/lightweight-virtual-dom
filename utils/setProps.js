import { setProp } from "./setProp";

export function setProps($target, props) {
  if (props && Object.keys(props).length > 0) {
    Object.keys(props).forEach((name) => {
      setProp($target, name, props[name]);
    });
  }
}
