import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  padding: {
    margin: 8,
  },
  base: {
    margin: '16px auto',
    minWidth: 50,
    maxWidth: 350,
  },
  button: {
    textTransform: 'none',
    margin: 8,
    backgroundColor: '#3e00d5',
    height: 56,
    fontSize: 20,
  },
});

const Search = ({ onSearch }) => {
  const classes = useStyles();
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');

  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className={classes.base}>
      <TextField
        label="Keyword..."
        variant="outlined"
        fullWidth
        className={classes.padding}
        onChange={handleKeywordChange}
        value={keyword}
      />
      <TextField
        select
        variant="outlined"
        label="Category..."
        fullWidth
        className={classes.padding}
        onChange={handleCategoryChange}
        value={category}
      />
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        className={classes.button}
        classes={{ root: classes.buttonCasing }}
        onClick={() => onSearch(keyword, category)}
      >
        Search
      </Button>
    </div>
  );
};

export default Search;
