import React, { useState } from 'react';
import './App.css';
import Search from './Search';

const API_KEY = process.env.REACT_APP_API_KEY;

function App() {
  const [results, setResults] = useState([]);

  const fetchSearchResults = (keyword, category) => {
    fetch(
      `https://pixabay.com/api/?key=${API_KEY}&q=${keyword}&category=${category}&image_type=photo&per_page=10`
    ).then((result) => {
      result.json().then((json) => {
        console.log(json);
        setResults(json.hits);
      });
    });
  };

  return (
    <div className="App">
      <Search onSearch={fetchSearchResults} />
      {results.map(({ id, previewURL }) => (
        <img key={id} src={previewURL} />
      ))}
    </div>
  );
}

export default App;
