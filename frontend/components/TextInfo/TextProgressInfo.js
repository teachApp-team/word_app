import React, { Component } from 'react';
import {Container,Grid,Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions, Paper} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faMedal, faPencilAlt, faCommentDots, faUser} from "@fortawesome/free-solid-svg-icons";
import { makeStyles, withTheme } from '@material-ui/core/styles';
import IconGroup from '../Layout/IconGroup';
import { ProgressBar } from 'react-bootstrap';


export default function TextProgressInfo() {
  return(
    <Container maxWidth='sm'  style={{marginTop:"40px"}}>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="100%"
            image="/static/texts/text1.jpg"
            title="Contemplative Reptile"
          />
        </Grid>
        <Grid item xs={7} style={{marginTop:"10%"}}>
          <Typography variant="h5" gutterBottom style={{margin:"10px"}}>
            ターゲット1900進捗度
          </Typography>
          <ProgressBar>
            <ProgressBar animated variant="danger" now={40} label={`${40}%`} key={1} />
            <ProgressBar animated now={20} label={`${20}%`}  key={2} />
          </ProgressBar>
        </Grid>
      </Grid>
    </Container>
  );
}