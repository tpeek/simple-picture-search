import React from 'react';
import SearchResult from './SearchResult';

const SearchResults = ({ results, savedResults, saveResult }) => {
  return (
    <ul>
      {results.map((result) => (
        <SearchResult
          key={result.id}
          saveResult={() => saveResult(result)}
          saved={savedResults.some((existing) => existing.id === result.id)}
          {...result}
        />
      ))}
    </ul>
  );
};

export default SearchResults;
