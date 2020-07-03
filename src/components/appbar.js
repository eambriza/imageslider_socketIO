import React from 'react';
import { makeStyles, AppBar, Toolbar, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appbarcolor: {
    background: theme.palette.background.default,
  },
}));

export default function PersistentDrawerRight() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar elevation={1} position="fixed" className={classes.appBar}>
        <Toolbar className={classes.appbarcolor}>
          <Avatar alt="bnry digital" src="./logo.jpg" />
        </Toolbar>
      </AppBar>
    </div>
  );
}
