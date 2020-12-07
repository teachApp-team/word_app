import React, { Component } from 'react';
import {Grid, Badge,IconButton, Popover,Typography, Avatar,Button, Paper, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PopoverProfile from '../Layout/PopoverProfile';
import PopoverMessage from '../Layout/PopoverMessage';
import PopoverHistory from '../Layout/PopoverHistory';


const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
    maxWidth: "300px",
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));



function PopoverRainking() {
  const classes = useStyles();
  return(
    <div className={classes.typography}>
      こちらのサービスはまだ開始していません
    </div>
  );
}


export default function PopoverComponent(props) {
  return(
    <Popover
      id={props.id}
      open={props.open}
      anchorEl={props.anchorEl}
      onClose={props.handleClose}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
    >
      { props.anchorEl && props.anchorEl.id == 1 && (
        <PopoverProfile />
      )}
      { props.anchorEl && props.anchorEl.id == 2 && (
        <PopoverMessage />
      )}
      { props.anchorEl && props.anchorEl.id == 3 && (
        <PopoverHistory />
      )}
      { props.anchorEl && props.anchorEl.id == 4 && (
        <PopoverRainking />
      )}
    </Popover>
  );
}
