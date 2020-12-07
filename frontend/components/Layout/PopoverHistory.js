import React, { Component } from 'react';
import {Grid, Badge,IconButton, Popover,Typography, Avatar,Button, Paper, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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

export default function PopoverHistory() {
  const classes = useStyles();
  return(
    <div  style={{width:"230px"}} className={classes.typography}>
      <div style={{textAlign:"center"}}>
        <h3 style={{margin:"5px"}}>学習状況</h3>
      </div>
      <div> 
        <Grid container spacing={1}>
          <Grid item xs={7} >
            <p style={{fontSize:"12px", margin:"0px"}}>累計習得単語数</p>
          </Grid>
          <Grid item xs={5} >
            <p style={{fontSize:"12px", margin:"0px"}}>500単語</p>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={7} >
            <p style={{fontSize:"12px", margin:"0px"}}>今日の習得単語数</p>
          </Grid>
          <Grid item xs={5} >
            <p style={{fontSize:"12px", margin:"0px"}}>100単語</p>
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={7} >
            <p style={{fontSize:"12px", margin:"0px"}}>今週の習得単語数</p>
          </Grid>
          <Grid item xs={5} >
            <p style={{fontSize:"12px", margin:"0px"}}>200単語</p>
          </Grid>
        </Grid>
      </div>
      <Divider /> 
      <div style={{textAlign:"center"}}>
        <Button variant="contained" size="small"style={{marginTop:"10px"}}>メッセージ詳細</Button>
      </div>
    </div>
  );
}