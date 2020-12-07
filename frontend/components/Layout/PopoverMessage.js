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

export default function PopoverMessage() {
  const classes = useStyles();
  return(
    <div className={classes.typography}>
      <div style={{textAlign:"center"}}>
        <h3 style={{margin:"5px"}}>最新メッセージ</h3>
      </div>
      <div>
        <Grid container spacing={1}>
          <Grid item xs={3} >
            <p style={{fontSize:"12px", margin:"0px"}}>12/7</p>
          </Grid>
          <Grid item xs={9} >
            <p style={{fontSize:"12px", margin:"0px"}}>From Kosuke Fujita</p>
          </Grid>
        </Grid>
        <div>
          <p style={{fontSize:"12px", marginTop:"10px"}}>やや英熟語の正答率が悪いようです。１日に少なくとも50単語は学習しましょう。</p>
        </div>
        <Divider /> 
      </div>
      <div style={{textAlign:"center"}}>
        <Button variant="contained" size="small"style={{marginTop:"10px"}}>学習状況詳細</Button>
      </div>
    </div>
  );
}