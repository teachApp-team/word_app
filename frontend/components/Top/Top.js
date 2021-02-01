import React, { useRef,useEffect, useState, useCallback }  from 'react';
import {FormControl,IconButton, InputAdornment,Input,InputLabel, Button, Box, TextField, Grid, Container, createMuiTheme, responsiveFontSizes, ThemeProvider, Typography, makeStyles} from '@material-ui/core';
import style from '../../static/Style';
import LoginBox from '../Top/LoginBox'
import { motion,useViewportScroll} from "framer-motion";
import TopImgBalloon from '../Top/TopImgBalloon'
import ScrollTriggerComponent from '../Top/ScrollTriggerComponent'
const bg1 = "url('../../static/top/ballon3.jpg')"

export default function Top() {
  const useStyles = makeStyles({
    scrollDownMessage:{
      width: "100%",
      textAlign:"center",
      position:"absolute",
      color:"white",
    },
    topTitle: {
      textAlign:"center",
      position: "relative",
      color:"white",
      padding: "20px",
    },
    AppSection : {
      maxWidth: "calc(60% - 50px)",
      margin: "0 auto 100px auto",
      padding: "50px",
      backgroundColor: "white",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
  });

  useEffect(() => {
    let dm = document.getElementById("scrollDownMessage");
    let bg = document.getElementById("bg");
    window.addEventListener('scroll', function(){
      var value = window.scrollY;
      const up = value*0.5 + 'px'
      const dmup = 30 + value*1.5 + 'px'
      bg.style.transform = "translate3d(0px,"+ up + ",0px)";
      dm.style.bottom = dmup;
    })
  })

  const classes = useStyles();
  return (
    <body style={{background:"#0a2a43", minHeight:"1500px", margin:0, padding:0}}>
      {style}
      <section 
        className="TopContainer"
        style={{
          position:"relative",
          width:"100%", 
          height:"100vh", 
          overflow: "hidden", 
          alignItems:"center"
          }}>
        <div style=
          {{
            backgroundImage: bg1,
            position: "absolute",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
            backgroundSize: 'cover',
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            willChange: "transform",
            transform: "translate3d(0px,0px,0px)"
          }}
          id="bg"/>
        <TopImgBalloon/>
        <div  className={classes.topTitle}>
          <motion.div animate={{ scale: 0.5 }}  transition={{ duration: 0.5 }}>
            <Typography variant="h2">TEACH APP</Typography>
            <Typography variant="h3">Login Form</Typography>
          </motion.div>
        </div>
        <div className={classes.loginWrapper}>
          <LoginBox />
        </div>
        <div 
          id="scrollDownMessage" className={classes.scrollDownMessage}
          style={{ bottom:"30px" }}>
          <motion.div animate={{ scale: 0.6 }}  transition={{ duration: 0.8 }}>
            <Typography variant="h4">About TeachApp <br></br>Scroll Down ↓ ↓</Typography>
          </motion.div>
        </div>
      </section>
      <ScrollTriggerComponent/>
    </body>
  )
}