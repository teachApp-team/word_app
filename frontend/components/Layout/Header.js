import React, { Component } from 'react';
import {AppBar, Button, Toolbar, Grid} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faMedal, faPencilAlt, faCommentDots, faUser} from "@fortawesome/free-solid-svg-icons";
import { makeStyles, withTheme } from '@material-ui/core/styles';
import IconGroup from '../Layout/IconGroup';

const useStyles = makeStyles((theme) => ({
  iconGroup: {
    flexGrow: 1,
  },
  icon: {
    fontSize: 20,
  },
  button: {
    background: "white",
  },
}));

export default function Header() {
  const classes = useStyles();

  return(
  <AppBar position="static">
    <Toolbar>
      <Button className={classes.button} variant="contained">Word App</Button>
      <div className={classes.iconGroup}>
        < IconGroup />
      </div>
    </Toolbar>
  </AppBar>
  );
}

