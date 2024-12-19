import { setProps } from "../utils/setProps";
import { diff } from "./diff";
import applyPatch from "./patch"

// function render(element, container) {

//   diff(element, container)
//   //this is checking if the element is rendering for the first time or not
//   let oldNode = container._vDOM;
//   if (oldNode) {
//     let patch = diff(oldNode, element);
//     if (patch) {
//       applyPatch(patch, oldNode, element);
//       container._vDOM = element;
//     } else {
//       return;
//     }
//   } else {
//     mountNewElement(element, container);
//     container._vDOM = element;
//   }
// }

function render(element, container) {
  if (!container._vDOM) {
    mountNewElement(element, container);
    container._vDOM = element;
    return;
  }

  console.log("Diff logic to be added later");
}
function mountNewElement(element, container) {
  if (typeof element.type === "function") {
    const component = element.type(); 
    render(component, container); 
    return;
  }

  const { type, props, children } = element;
  const newElement = document.createElement(type);

  setProps(newElement, props);

  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === "string") {
        const textNode = document.createTextNode(child);
        newElement.appendChild(textNode);
      } else {
        render(child, newElement);
      }
    });
  } else if (typeof children === "string") {
    const textNode = document.createTextNode(children);
    newElement.appendChild(textNode);
  }

  container.appendChild(newElement);
}

function createElement(type, props, ...children) {
  return { type, props, children };
}


export const vDom = {
  createElement,
  render,
};
