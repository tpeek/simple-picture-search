import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Star from '@material-ui/icons/StarRounded';

const savedMessageStyles = {
  color: 'white',
  position: 'absolute',
  textAlign: 'center',
  bottom: -16,
  width: 200,
  padding: '2px 0',
};

const useStyles = makeStyles({
  base: {
    position: 'relative',
    maxWidth: 400,
    margin: '40px 0',
    '&::after': {
      content: '" "',
      clear: 'both',
      display: 'table',
    },
  },
  tag: {
    color: 'white',
    backgroundColor: '#00a48f',
    padding: '2px 5px',
    margin: 4,
    display: 'inline-block',
    fontSize: 14,
  },
  img: {
    float: 'left',
    width: 200,
    '&:hover': {
      '& + p': {
        display: 'block',
      },
    },
  },
  saveMessage: {
    ...savedMessageStyles,
    display: 'none',
    backgroundColor: '#be4362',
  },
  savedMessage: {
    ...savedMessageStyles,
    backgroundColor: '#ea8928',
  },
});

const SearchResult = ({ previewURL, tags, likes, favorites, saveResult, saved }) => {
  const classes = useStyles();

  return (
    <li className={classes.base}>
      <img src={previewURL} className={classes.img} onClick={saveResult} />
      <p className={saved ? classes.savedMessage : classes.saveMessage}>
        {saved ? 'Saved' : 'Save'}
      </p>
      <div
        style={{
          float: 'left',
          display: 'flex',
          flexWrap: 'wrap',
          width: 160,
          marginLeft: 16,
        }}
      >
        {tags.split(', ').map((category) => (
          <span className={classes.tag} key={category}>
            {category}
          </span>
        ))}
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 224,
          fontSize: 12,
          fontWeight: 'bold',
        }}
      >
        <span>{likes}</span>
        <ThumbUp
          style={{ marginLeft: 5, marginBottom: -2, height: 14, width: 14, marginRight: 32 }}
        />
        <span>{favorites}</span>
        <Star style={{ marginLeft: 5, marginBottom: -3, height: 16, width: 16 }} />
      </div>
    </li>
  );
};

export default SearchResult;
