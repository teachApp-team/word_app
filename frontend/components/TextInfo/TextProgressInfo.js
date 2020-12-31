import React from 'react';
import {Container,Grid,Typography, CardMedia} from '@material-ui/core';
import { ProgressBar } from 'react-bootstrap';
import Skeleton from '@material-ui/lab/Skeleton';


export default function TextProgressInfo(props) {
  console.log(props.loading.loading);
  if (props.loading.loading) {
    return(
      <Container maxWidth='sm'  style={{marginTop:"20px"}}>
        <Typography variant={'h5'}>
          <Skeleton animation="wave" />
        </Typography>
        <ProgressBar style={{margin: "auto"}}>
          <ProgressBar animated variant="danger" now={props.correct} label={`${props.correct}%`} key={1} />
          <ProgressBar animated now={props.wrong} label={`${props.wrong}%`}  key={2} />
        </ProgressBar>
        <Grid container spacing={1} style={{marginTop:"20px"}}>
          <Grid item xs={5}>
            <Skeleton variant="rect" width="100%" height="100%">
              <CardMedia component="img"/>
            </Skeleton>
          </Grid>
          <Grid item xs={7} style={{padding: "auto"}}>
            <div>
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  } else {
    return(
      <Container maxWidth='sm'  style={{marginTop:"20px"}}>
        <Typography>
          <h5>{props.name}</h5>
        </Typography>
        <ProgressBar style={{margin: "auto"}}>
          <ProgressBar animated variant="danger" now={props.correct} label={`${props.correct}%`} key={1} />
          <ProgressBar animated now={props.wrong} label={`${props.wrong}%`}  key={2} />
        </ProgressBar>
        <Grid container spacing={1} style={{marginTop:"20px"}}>
          <Grid item xs={5}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              image="/static/texts/text1.jpg"
              title="Contemplative Reptile"
            />
          </Grid>
          <Grid item xs={7} style={{padding: "auto"}}>
            <div>
              {props.info}
            </div>
          </Grid>
        </Grid>
      </Container>
    );
  }
}