import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    marginTop: '30px',
    marginLeft: '50px',
  },
  banner: {
    background: `url(./banner1.jpg)`,
    height: '15vh',
    maxWidth: '100%',
    display: 'flex',
    marginTop: 55,
  },
}));

export default function STATS(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.banner}>
      <Typography className={classes.title} variant="h5">
        <p> BNRY Image Slider Test </p>
      </Typography>
    </div>
  );
}
