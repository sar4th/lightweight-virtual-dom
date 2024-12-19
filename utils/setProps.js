import { setProp } from "./setProp";
import { addEventListeners } from "./setProp";
export function setProps($target, props) {
  if (props && Object.keys(props).length > 0) {
    Object.keys(props).forEach((name) => {
      if (/^on/.test(name)) {
        $target.addEventListener(name.slice(2).toLowerCase(), props[name]);
      } else {
        Object.keys(props).forEach((name) => {
          setProp($target, name, props[name]);
        });
      }
    });
  }
}
