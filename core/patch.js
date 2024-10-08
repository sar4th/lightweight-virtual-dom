export function patch(patch, element, container) {
  // Check if the element is a functional component
  if (typeof element.type === "function") {
    const component = element.type(); // Call the component
    render(component, container); // Recursively render the component
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
  container._vDOM = element;
  // Append the newly created element to the container, if it exists
  if (container) {
    container.appendChild(newElement);
  }
}
