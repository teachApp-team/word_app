import React, { useState,Component } from 'react';
import {Container,Grid,Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions, Paper} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faMedal, faPencilAlt, faCommentDots, faUser} from "@fortawesome/free-solid-svg-icons";
import { makeStyles, withTheme } from '@material-ui/core/styles';
import IconGroup from '../Layout/IconGroup';
import { ProgressBar } from 'react-bootstrap';
import { useRouter } from 'next/router';



export default function TextProgressInfo() {
  let iniData = {id:1, name: "テキスト名", image:"/static/texts/text1.jpg", correct:30, wrong:20, not:50}
  const [data, setData] = useState(iniData);
  let correct_percent = Math.floor(data.correct / (data.correct + data.wrong + data.not) * 100);
  let wrong_percent = Math.floor(data.wrong / (data.correct + data.wrong + data.not) * 100);
  // useEffect(() => {
  //   axios.get("".then( res => {
  //   console.log('教材データ取得')
  //   setData(res.data)
  //   console.log(data);
  //   })
  // }, []);
  console.log("TextProgressInfoレンダー");
  
  return(
    <Container maxWidth='sm'  style={{marginTop:"40px"}}>
      <Grid container spacing={3}>
        <Grid item xs={5}>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="100%"
            image={data.image}
            title="Contemplative Reptile"
          />
        </Grid>
        <Grid item xs={7} style={{marginTop:"10%"}}>
          <Typography variant="h5" gutterBottom style={{margin:"10px"}}>
            {data.name}
          </Typography>
          <ProgressBar>
            <ProgressBar animated variant="danger" now={correct_percent} label={`${correct_percent}%`} key={1} />
            <ProgressBar animated now={wrong_percent} label={`${wrong_percent}%`}  key={2} />
          </ProgressBar>
        </Grid>
      </Grid>
    </Container>
  );
}