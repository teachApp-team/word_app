import React, { useRef,useEffect, useState, useCallback }  from 'react';
import {FormControl,IconButton, InputAdornment,Input,InputLabel, Button, Box, TextField, Grid, Container, createMuiTheme, responsiveFontSizes, ThemeProvider, Typography, makeStyles} from '@material-ui/core';
import style from '../static/Style';
import LoginBox from '../components/Top/LoginBox'
import { motion,useViewportScroll} from "framer-motion";
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import TopImgBalloon from '../components/Top/TopImgBalloon'
import BottomImgBalloon from '../components/Top/BottomImgBalloon'

export default function Index1() {

  const useStyles = makeStyles({
    topTitle: {
      textAlign:"center",
      position: "relative",
      color:"white",
      padding: "20px",
    },
    AppSection : {
      maxWidth: "calc(90% - 50px)",
      margin: "0 auto 100px auto",
      padding: "50px",
      backgroundColor: "white",
      display: "flex",
      alignContent: "center",
      justifyContent: "center",
      flexDirection: "column",
    },
    ballonImg : {
      backgroundPosition: "center", 

    }
  });
  // const el = useRef(null);
  const classes = useStyles();

  // useEffect(() => {
  //   window.setTimeout(GetRef, 1000);
  // },[el.current]);

  
  // function GetRef(){
  //   console.log("5秒後に実行");
  //   gsap.registerPlugin(ScrollTrigger);
  //   console.log("el");
  //   console.log(el);
  //   console.log(el.current);
  //   if(el.current != null) {
  //     gsap.fromTo(
  //       el.current,
  //       {autoAlpha: 0
  //       },
  //       {
  //         duration: 1,
  //         autoAlpha: 1,
  //         ease: "none",
  //         scrollTrigger: {
  //           id: `section-1`,
  //           trigger: el.current,
  //           start: "top",
  //           toggleActions: "play none none reverse",
  //           markers: true
  //         }
  //       }
  //     );
  //   }
  // }


  return (
    <body style={{background:"#0a2a43", minHeight:"1500px", margin:0, padding:0}}>

        <Parallax pages={2} style=
          {{ 
            height:"100vh", overflow: "hidden", backgroundColor: 'white',
          }}>      

          <ParallaxLayer offset={0} speed={-0.2} 
          style=
          {{ 
            backgroundPosition: "center", backgroundImage: "url('../static/top/ballon3.jpg')", backgroundSize: 'cover'
          }} />

          <ParallaxLayer style={{ zIndex: 500 }} offset={0} speed={0} factor={1} >
            <div  className={classes.topTitle}>
              <motion.div animate={{ scale: 0.5 }}  transition={{ duration: 0.5 }}>
                <Typography variant="h2">TEACH APP</Typography>
              </motion.div>
            </div>
            <div className={classes.loginWrapper}>
              <LoginBox />
            </div>
          </ParallaxLayer>
        < TopImgBalloon/>

        <ParallaxLayer
          offset={0.42}
          speed={5}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: "white" }}>
          <motion.div animate={{ scale: 0.6 }}  transition={{ duration: 0.8 }}>
            <Typography variant="h4">About TeachApp <br></br>Scroll Down ↓ ↓</Typography>
          </motion.div>
        </ParallaxLayer>
      </Parallax>

      <section><div><h1>Scroll Trigger</h1></div></section>
    </body>
  )
}
