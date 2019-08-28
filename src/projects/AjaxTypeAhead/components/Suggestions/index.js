import React from "react";

import SuggestionItem from '../SuggestionItem';

const Suggestions = ({ data, isLoading, error }) => {
  /**
   * Here you can have your logic to handle error state
   * or loading state. e.g. show loading indicator while loading.
   * But we will skip it, for simplicity. We just won't render
   * anything, if there are errors, or component is loading.
   */
  if (!data || error || isLoading) {
    return null;
  }

  return (
    <div>
      {data.hits.filter(
        item => Boolean(item.title)
      ).map(item => <SuggestionItem key={item.objectID} {...item} />)}
    </div>
  );
};

export default Suggestions;
