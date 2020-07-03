import React from 'react';
import { makeStyles, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  footer: {
    padding: '15px',
    background: '#C0C0C0',
    textAlign: 'center',
    position: 'absolute',
    bottom: '0',
    width: '100%',
  },
});

export default function FOOTER(props) {
  const classes = useStyles(props);
  return (
    <Paper>
      <footer className={classes.footer}>
        <Typography variant="body2">
          Copyright &copy; 2020 | Designed By : EA, All rights reserved.{' '}
        </Typography>
      </footer>
    </Paper>
  );
}
