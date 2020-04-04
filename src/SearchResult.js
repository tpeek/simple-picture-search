import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Star from '@material-ui/icons/StarRounded';

const useStyles = makeStyles({
  base: {
    position: 'relative',
    maxWidth: 400,
    margin: '40px auto',
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
});

const SearchResult = ({ previewURL, tags, likes, favorites }) => {
  const classes = useStyles();

  return (
    <li className={classes.base}>
      <img src={previewURL} style={{ float: 'left' }} width="200px" />
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
