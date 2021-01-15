import React, { useRef,useEffect, useState }  from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion,useViewportScroll} from "framer-motion";
import {FormControl,IconButton, InputAdornment,Input,InputLabel, Button, Box, TextField, Grid, Container, createMuiTheme, responsiveFontSizes, ThemeProvider, Typography, makeStyles} from '@material-ui/core';
import InfoContainer from '../Top/InfoContainer'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


export default function ScrollTriggerComponent()  {
  useEffect(() => {
    GetRef();
  })
  const el1 = useRef(null);  
  const el2 = useRef(null);  
  const el3 = useRef(null);
  

  function GetRef(){
    gsap.fromTo(el1.current,
      {autoAlpha: 0},
      {autoAlpha: 1,ease: "none",
        scrollTrigger: {id: `section-1`,trigger: el1.current,start: "top 50%",toggleActions: "play none none reverse"}
      }
    );
    gsap.fromTo(el2.current,
      {autoAlpha: 0},
      {autoAlpha: 1,ease: "none",
        scrollTrigger: {id: `section-2`,trigger: el2.current,start: "top 50%",toggleActions: "play none none reverse"}
      }
    );
    gsap.fromTo(el3.current,
      {autoAlpha: 0},
      {autoAlpha: 1,ease: "none",
        scrollTrigger: {id: `section-3`,trigger: el3.current,start: "top 50%",toggleActions: "play none none reverse"}
      }
    );
  }
  return (
    <section>
      <div style={{color: "white", textAlign:"center", margin:"40px 0"}}ref={el1}>
        <Typography variant="h4">WordApp勉強方法</Typography>
      </div>
      <div style={{color: "white", textAlign:"center", margin:"10px 0"}}ref={el2}>
        <Typography variant="p">WordAppでは3000以上もの英単語・英熟語が収録されています。</Typography>
      </div>
      <div style={{color: "white", textAlign:"center", margin:"10px 0px "}}ref={el3}>
        <Typography variant="p">以下の学習方法を参考にして効率的かつ正確に覚えましょう。</Typography>
      </div>
      <InfoContainer/>
    </section>
  );
}

