import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Search from './Search';
import SearchResult from './SearchResult';
import SavedArea from './SavedArea';

const API_KEY = process.env.REACT_APP_API_KEY;

const useStyles = makeStyles({
  root: {
    maxWidth: 650,
    margin: '0 auto',
    marginTop: 20,
  },
  leftPanel: {
    display: 'inline-block',
  },
  rightPanel: {
    float: 'right',
  },
});

function App() {
  const classes = useStyles();
  const [results, setResults] = useState([]);
  const [savedResults, setSavedResults] = useState([]);

  const saveResult = (result) => {
    if (!savedResults.some((existing) => existing.id === result.id)) {
      setSavedResults([...savedResults, result]);
    }
  };

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

  return (
    <div className={classes.root}>
      <div className={classes.leftPanel}>
        <Search onSearch={fetchSearchResults} />
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
      </div>
      <div className={classes.rightPanel}>
        <SavedArea savedResults={savedResults} />
      </div>
    </div>
  );
}

export default App;
