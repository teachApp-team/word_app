import React, { Component } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {AppBar, Button, Toolbar, Grid} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faMedal, faPencilAlt, faCommentDots, faUser} from "@fortawesome/free-solid-svg-icons";
import { makeStyles, withTheme } from '@material-ui/core/styles';
import IconGroup from '../Layout/IconGroup';
import Alternative from '../Test/Alternative';
import store from '../../store';
import Link from 'next/link';

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

export default function Header(props) {
  const classes = useStyles();
  const data = useSelector(state => state.questioncount)
  const id = useSelector(state => state.student_id)
  console.log(id)
  return(
  <AppBar position="static">
    <Toolbar>
      <Link href="/textSelection">
        <Button className={classes.button} variant="contained">Word App</Button>
      </Link>
      {data}{props.student_id}
      <div className={classes.iconGroup}>
        < IconGroup />
      </div>
    </Toolbar>
  </AppBar>
  );
}

