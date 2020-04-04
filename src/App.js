import React, { useState, useEffect } from 'react';
import './App.css';
import Search from './Search';
import SearchResult from './SearchResult';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [results, setResults] = useState([]);

  const fetchSearchResults = (keyword = '', category = '') => {
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&category=${category}&image_type=photo&per_page=10`
    ).then((result) => {
      result.json().then((json) => {
        console.log(json);
        setResults(json.hits);
      });
    });
  };

  useEffect(() => {
    fetchSearchResults();
  }, []);

  return (
    <div className="App">
      <Search onSearch={fetchSearchResults} />
      <ul>
        {results.map(({ id, ...rest }) => (
          <SearchResult key={id} id={id} {...rest} />
        ))}
      </ul>
    </div>
  );
}

export default App;
