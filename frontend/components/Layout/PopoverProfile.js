import React, { useState,useEffect } from 'react';
import {Grid, Badge,IconButton, Popover,Typography, Avatar,Button, Paper, Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';

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

export default function PopoverProfile() {
  const classes = useStyles();

  let iniProfile = [{email:"sample",id:null,image:null,name:"sample",nickname:"sample"}];
  const [profile, setProfile] = useState(iniProfile);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/student/1").then( res => {
      console.log('プロフィールデータ取得');
      console.log(res.data);
      setProfile(res.data)
    }).catch(error => {
      console.log(error)
    })   
  }, []);

  return(
    <div className={classes.typography}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
          <Avatar alt="Kosuke Fujita" src="/static/profile/image.jpg" className={classes.large}  />
        </Grid>
        <Grid item xs={8}>
          <h5 style={{margin:0}}>{profile.name}</h5>
          <div>大学4年</div>
        </Grid>
      </Grid>
      <div>
        <div style={{padding:"20px", textAlign:"center"}}>
          <h6 style={{margin:0}}>担当の先生</h6>
          <h6 style={{margin:0}}>HiroHaru Hara</h6>
        </div>
      </div>
      <div>
        <Button variant="contained" size="small" style={{margin:"5px"}}>プロフィール編集</Button>
        <Button variant="contained" size="small"style={{margin:"5px"}}>ログアウト</Button>
      </div>
    </div>
  );
}
