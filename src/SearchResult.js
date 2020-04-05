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
  root: {
    position: 'relative',
    maxWidth: 400,
    margin: '40px 0',
    '&::after': {
      content: '" "',
      clear: 'both',
      display: 'table',
    },
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
  tagContainer: {
    float: 'left',
    display: 'flex',
    flexWrap: 'wrap',
    width: 160,
    marginLeft: 16,
  },
  tag: {
    color: 'white',
    backgroundColor: '#00a48f',
    padding: '2px 5px',
    margin: 4,
    display: 'inline-block',
    fontSize: 14,
  },
  socialContainer: {
    position: 'absolute',
    bottom: 0,
    left: 224,
    fontSize: 12,
    fontWeight: 'bold',
  },
  thumb: {
    marginLeft: 5,
    marginBottom: -2,
    height: 14,
    width: 14,
    marginRight: 32,
  },
  star: {
    marginLeft: 5,
    marginBottom: -3,
    height: 16,
    width: 16,
  },
});

const SearchResult = ({ previewURL, tags, likes, favorites, saveResult, saved }) => {
  const classes = useStyles();

  return (
    <li className={classes.root}>
      <img src={previewURL} className={classes.img} onClick={saveResult} alt={tags} />
      <p className={saved ? classes.savedMessage : classes.saveMessage}>
        {saved ? 'Saved' : 'Save'}
      </p>
      <div className={classes.tagContainer}>
        {tags.split(', ').map((category) => (
          <span className={classes.tag} key={category}>
            {category}
          </span>
        ))}
      </div>
      <div className={classes.socialContainer}>
        <span>{likes}</span>
        <ThumbUp className={classes.thumb} />
        <span>{favorites}</span>
        <Star className={classes.star} />
      </div>
    </li>
  );
};

export default SearchResult;
