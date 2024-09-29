export function setProp($target, name, value) {
  let DOMAttribute;
  switch (name) {
    case "className":
      DOMAttribute = "class";
      break;
    default:
      DOMAttribute = name;
      break;
  }

  $target.setAttribute(DOMAttribute, value);
}
