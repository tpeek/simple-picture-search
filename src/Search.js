import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

const categories = [
  'Animals',
  'Backgrounds',
  'Buildings',
  'Business',
  'Computer',
  'Education',
  'Fashion',
  'Feelings',
  'Food',
  'Health',
  'Industry',
  'Music',
  'Nature',
  'People',
  'Places',
  'Religion',
  'Science',
  'Sports',
  'Transportation',
  'Travel',
];

const useStyles = makeStyles({
  root: {
    minWidth: 50,
    maxWidth: 375,
  },
  spacing: {
    margin: 8,
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

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch(keyword, category);
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="Keyword..."
        variant="outlined"
        fullWidth
        className={classes.spacing}
        onChange={handleKeywordChange}
        value={keyword}
      />
      <TextField
        select
        variant="outlined"
        label="Category..."
        fullWidth
        className={classes.spacing}
        onChange={handleCategoryChange}
        value={category}
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category.toLowerCase()}>
            {category}
          </MenuItem>
        ))}
      </TextField>
      <Button
        color="primary"
        variant="contained"
        type="submit"
        size="large"
        fullWidth
        className={classes.button}
      >
        Search
      </Button>
    </form>
  );
};

export default Search;
