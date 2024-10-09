
// It takes two nodes to be compared, an old and a new one.

  // First we deal with text nodes. If their text content is not
  // identical, then let's replace the old one for the new one.
  // Otherwise it's a `noop`, which means we do nothing.


  // Next we start dealing with element nodes.
  // If the tag changed we should just replace the whole thing.

  // Now that replacement is out of the way we could only possibly
  // modify the element. So let's start by taking note of properties
  // that should be removed.
  // Any property that is not present in the new node should be removed.


  // And now let's check which ones should be set.
  // This includes new and modified properties.
  // So unless the property's value is the same in the old and
  // new nodes we will take note of it.


  // Lastly we diff the list of children.
