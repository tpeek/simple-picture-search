import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import OpenInNew from '@material-ui/icons/OpenInNew';

const useStyles = makeStyles({
  root: {
    float: 'right',
    borderLeft: 'solid lightgray 2px',
    height: 700,
    paddingLeft: 40,
    minWidth: 150,
  },
  link: {
    fontWeight: 'bold',
    display: 'block',
    padding: '4px 0',
    margin: '10px 0',
    fontVariantNumeric: 'tabular-nums',
  },
  openIcon: {
    marginLeft: 10,
    marginBottom: -2,
    width: 14,
    height: 14,
  },
  pixabayLink: {
    margin: '3px 15px 5px 0',
    fontSize: 12,
    lineHeight: 1.7,
    color: '#555',
    display: 'block',
    float: 'left',
    padding: '9px 12px 6px',
    border: '1px solid #ccc',
  },
});

const SavedArea = ({ savedResults }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <a href="https://pixabay.com/">
        <img
          src="https://pixabay.com/static/img/public/medium_rectangle_a.png"
          alt="Pixabay"
          target="_blank"
          width={150}
        />
      </a>
      <h2>Saved</h2>
      {savedResults.map((result) => (
        <Link key={result.id} target="_blank" href={result.pageURL} className={classes.link}>
          #{result.id}
          <OpenInNew className={classes.openIcon} />
        </Link>
      ))}
    </div>
  );
};

export default SavedArea;
