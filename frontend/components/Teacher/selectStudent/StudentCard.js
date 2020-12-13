import React from 'react';
import {Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions, Avatar, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(9),
    height: theme.spacing(9),
    margin: "auto"
  },
}));

export default function StudentCard() {
  const classes = useStyles();
  return(
    <Card style={{display:"inline-block", maxWidth: "200px", flexShrink: 0, marginRight: "30px"}}>
      <CardActionArea>
        <CardContent>
          <Avatar alt="Remy Sharp" src="/static/profile/image.jpg" className={classes.large} />
          <Typography gutterBottom variant="h6" component="h5">
            Kosuke Fujita
          </Typography>
          <div> 
            <Grid container spacing={1}>
              <Grid item xs={7} >
                <p style={{fontSize:"10px", margin:"0px"}}>累計習得単語数</p>
              </Grid>
              <Grid item xs={5} >
                <p style={{fontSize:"10px", margin:"0px"}}>500単語</p>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={7} >
                <p style={{fontSize:"10px", margin:"0px"}}>今日の習得単語数</p>
              </Grid>
              <Grid item xs={5} >
                <p style={{fontSize:"10px", margin:"0px"}}>100単語</p>
              </Grid>
            </Grid>
            <Grid container spacing={1}>
              <Grid item xs={7} >
                <p style={{fontSize:"10px", margin:"0px"}}>今週の習得単語数</p>
              </Grid>
              <Grid item xs={5} >
                <p style={{fontSize:"10px", margin:"0px"}}>200単語</p>
              </Grid>
            </Grid>
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions  style={{padding: "auto"}}>
        <Button  href='/textInfo' style={{margin: "auto"}} size="small" color="primary">
          生徒詳細
        </Button>
      </CardActions>
    </Card>
  )
}