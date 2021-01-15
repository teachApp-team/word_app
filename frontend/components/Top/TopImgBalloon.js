import React, { useRef,useEffect, useState, useCallback }  from 'react';
import {FormControl,IconButton, InputAdornment,Input,InputLabel, Button, Box, TextField, Grid, Container, createMuiTheme, responsiveFontSizes, ThemeProvider, Typography, makeStyles} from '@material-ui/core';
import { gsap } from "gsap";

const yellow = "url('../../static/top/ballonsk1.png')"
const red = "url('../../static/top/ballonsk3.png')"
const red2 = "url('../../static/top/ballonred.png')"
const rein = "url('../../static/top/ballonsk2.png')"


import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function TopImgBalloon(props) {
  const useStyles = makeStyles({
    balloonImg: {
      pointerEvents: "none",
      backgroundSize: 'contain',
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      willChange: "transform",
      position: "absolute",
    },
  });

  useEffect(() => {
    let balloon1 = document.getElementById("balloon1");
    let balloon2 = document.getElementById("balloon2");
    let balloon3 = document.getElementById("balloon3");
    let balloon4 = document.getElementById("balloon4");
    let balloon5 = document.getElementById("balloon5");
    let balloon6 = document.getElementById("balloon6");
    window.addEventListener('scroll', function(){
      var value = window.scrollY;
      const down1 = 70 -value*0.2+'px'
      const down2 = 290 -value*0.3+'px'
      const down3 = 440 -value*0.4+'px'
      const down4 = 550 -value*1.1+'px'
      const down5 = 150 -value*0.5+'px'
      const down6 = 500 -value*1.2+'px'
      balloon1.style.transform = "translate3d(0px,"+ down1 + ",0px)";
      balloon2.style.transform = "translate3d(0px,"+ down2 + ",0px)";
      balloon3.style.transform = "translate3d(0px,"+ down3 + ",0px)";
      balloon4.style.transform = "translate3d(0px,"+ down4 + ",0px)";
      balloon5.style.transform = "translate3d(0px,"+ down5 + ",0px)";
      balloon6.style.transform = "translate3d(0px,"+ down6 + ",0px)";
    })
  })
  const classes = useStyles();

  return (
  <div style={{zIndex:0}}>
    <div style=
      {{
        backgroundImage: yellow,
        left: "92%",
        width: "70px",
        height: "70px",
        transform: "translate3d(0px,70px,0px)"
      }}
      id="balloon1" 
      className={classes.balloonImg}/>
    <div style=
      {{
        backgroundImage: red,
        left: "88%",
        width: "120px",
        height: "120px",
        transform: "translate3d(0px,290px,0px)"
      }}
      id="balloon2"
      className={classes.balloonImg}/>
      <div style=
        {{
          backgroundImage: red,
          left: "25%",
          width: "220px",
          height: "220px",
          transform: "translate3d(0px,440px,0px)",
        }}
        id="balloon3"
        className={classes.balloonImg}/>
        <div style=
        {{
          backgroundImage: red,
          left: "2%",
          width: "100px",
          height: "100px",
          transform: "translate3d(0px,100px,0px)",
        }}
        id="balloon3"
        className={classes.balloonImg}/>
        <div style=
        {{
          backgroundImage: red2,
          left: "10%",
          width: "100px",
          height: "100px",
          transform: "translate3d(0px,550px,0px)",
        }}
        id="balloon4"
        className={classes.balloonImg}/>
        <div style=
        {{
          backgroundImage: yellow,
          left: "70%",
          width: "30px",
          height: "30px",
          transform: "translate3d(0px,150px,0px)",
        }}
        id="balloon5"
        className={classes.balloonImg}/>
        <div style=
        {{
          backgroundImage: rein,
          left: "20%",
          width: "100px",
          height: "100px",
          transform: "translate3d(0px,150px,0px)",
        }}
        id="balloon5"
        className={classes.balloonImg}/>
        <div style=
        {{
          backgroundImage: red2,
          left: "70%",
          width: "70px",
          height: "70px",
          transform: "translate3d(0px,500px,0px)",
        }}
        id="balloon6"
        className={classes.balloonImg}/>
  </div>
  );
}