import React from 'react';
import {Container,Grid,Typography, CardMedia} from '@material-ui/core';
import { ProgressBar } from 'react-bootstrap';


export default function TextProgressInfo(props) {
  
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
            // height="100%"
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