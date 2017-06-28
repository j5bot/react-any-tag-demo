import React from 'react'; // needed for JSX

export const AnyTag = (props) => {

  // Create a Capitalized reference to a String
  // whatever is in the string will be the tagname of our "Component"
  const TagName = props.tagName;

  // make a copy of props that we can mutate
  let propsCopy = { ...props };

  // get rid of the tagName property, since we're using that for the
  // tag name, not for one of the tags' attributes / component's properties
  delete propsCopy.tagName;

  // Render whatever tag is in props.tagName, with all of the attributes/props
  // defined on AnyTag except tagName, and all of the children of AnyTag
  return (
    <TagName { ...propsCopy } />
  );

};

export default AnyTag;
