import React from "react";

import Item from "../SuggestionItem";

const Suggestions = ({ data }) => {
  return (
    <div>
      {data.hits.map(post => (
        <Item key={post.objectID} {...post} />
      ))}
    </div>
  );
};

export default Suggestions;
