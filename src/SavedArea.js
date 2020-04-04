import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import OpenInNew from '@material-ui/icons/OpenInNew';

const useStyles = makeStyles({
  base: {
    float: 'right',
    borderLeft: 'solid lightgray 2px',
    height: 700,
    paddingLeft: 40,
    minWidth: 150,
  },
});

const SavedArea = ({ savedResults }) => {
  const classes = useStyles();

  return (
    <div className={classes.base}>
      <h2>Saved</h2>
      {savedResults.map((result) => (
        <Link
          key={result.id}
          target="_blank"
          href={result.pageURL}
          style={{
            fontWeight: 'bold',
            display: 'block',
            padding: '4px 0',
            margin: '10px 0',
            fontVariantNumeric: 'tabular-nums',
          }}
        >
          #{result.id}
          <OpenInNew style={{ marginLeft: 10, marginBottom: -2, width: 14, height: 14 }} />
        </Link>
      ))}
    </div>
  );
};

export default SavedArea;
