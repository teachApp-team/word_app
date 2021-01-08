import React, { useRef,useEffect, useState }  from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion,useViewportScroll} from "framer-motion";
import {FormControl,IconButton, InputAdornment,Input,InputLabel, Button, Box, TextField, Grid, Container, createMuiTheme, responsiveFontSizes, ThemeProvider, Typography, makeStyles} from '@material-ui/core';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function ScrollTriggerComponent()  {
  useEffect(() => {
    GetRef();
  })
  const el = useRef(null);  

  function GetRef(){
    if(el.current != null) {
      gsap.fromTo(
        el.current,
        {autoAlpha: 0
        },
        {
          duration: 1,
          autoAlpha: 1,
          ease: "none",
          scrollTrigger: {
            id: `section-1`,
            trigger: el.current,
            start: "top 50%",
            toggleActions: "play none none reverse",
            markers: true
          }
        }
      );
    }
  }
  return (
    <section>
      <div style={{color: "white"}}ref={el}><h1>Scroll Trigger</h1></div>
    </section>
  );
}

