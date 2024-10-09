import { setProps } from "../utils/setProps";
import { diff } from "./diff";
import { applyPatch } from "./patch";

function render(element, container) {
  diff(element, container)
  //this is checking if the element is rendering for the first time or not
  let oldNode = container._vDOM;
  if (oldNode) {
    let patch = diff(oldNode, element);
    if (patch) {
      applyPatch(patch, oldNode, element);
      container._vDOM = element;
    } else {
      return;
    }
  } else {
    mountNewElement(element, container);
    container._vDOM = element;
  }
}
function mountNewElement(element, container) {
  if (typeof element.type === "function") {
    const component = element.type(); 
    render(component, container); 
    return;
  }

  const { type, props, children } = element;

  // Create a new DOM element
  const newElement = document.createElement(type);

  // Set properties
  setProps(newElement, props);

  // Append children if they are text or elements
  if (Array.isArray(children)) {
    children.forEach((child) => {
      if (typeof child === "string") {
        const textNode = document.createTextNode(child);
        newElement.appendChild(textNode);
      } else {
        render(child, newElement); // Recursively render child elements
      }
    });
  } else if (typeof children === "string") {
    const textNode = document.createTextNode(children);
    newElement.appendChild(textNode);
  }

}
function createElement(type, props, ...children) {
  return {
    type,
    props,
    children,
  };
}

export const vDom = {
  createElement,
  render,
};
