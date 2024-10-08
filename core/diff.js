export function diff(oldNode, newNode) {
  if (typeof oldNode === "object" && typeof newNode === "object") {
    if (
      typeof oldNode.children[0] === "string" &&
      newNode.children[0] === "string"
    ) {
      isIdentical = isBothStringIdentical(
        oldNode.children[0],
        newNode.children[0]
      );
      if (isIdentical) {
        return { status: "noop" };
      } else {
        return {
          type: "STRING",
          status: "REPLACE",
          oldNode,
          newNode,
        };
      }
    }

    if (oldNode?.type !== newNode.type) {
      return { status: "REPLACE", type: "ELM_NODE", newNode, oldNode };
    }
  } else {
    return new Error("not valid element");
  }
}

function isBothStringIdentical(str1, str2) {
  return str1 === str2;
}
