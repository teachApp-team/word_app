import React, { Component } from 'react';
import {Grid, Badge,IconButton, Popover,Typography, Avatar,Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faMedal, faPencilAlt, faCommentDots, faUser} from "@fortawesome/free-solid-svg-icons";
import Icon from '../Layout/Icon';
import PopoverComponent from '../Layout/Popover';


export default function IconGroup() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  let currentTargetId = 0;

  const handleClick = (event) => {
    currentTargetId = event.currentTarget.id;
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return(
    <Grid container spacing={1} justify={"flex-end"}>
      <IconButton aria-label="show 4 new mails" color="inherit" style={{justifyContent:"start"}}>
        < Icon icon={faBook} xs={2}/>
      </IconButton>
      <IconButton aria-label="show 4 new mails" color="inherit" id={4} onClick={handleClick} style={{justifyContent:"start"}}>
        < Icon icon={faMedal} xs={2}/>
      </IconButton>
      <IconButton aria-label="show 4 new mails" color="inherit" id={3} onClick={handleClick} style={{justifyContent:"start"}}>
        < Icon icon={faPencilAlt} xs={2}/>
      </IconButton>
      <IconButton aria-label="show 4 new mails" color="inherit" id={2} onClick={handleClick}>
        <Badge badgeContent={4} color="secondary">
          < Icon icon={faCommentDots} xs={2}/>
        </Badge>
      </IconButton>
      <IconButton aria-label="show 4 new mails" color="inherit" id={1} onClick={handleClick} style={{justifyContent:"start"}}>
        < Icon icon={faUser} xs={2}/>
      </IconButton>
      < PopoverComponent id={id} open={open} anchorEl={anchorEl} handleClose={handleClose} currentTargetId={currentTargetId}/>
    </Grid>
  );
}