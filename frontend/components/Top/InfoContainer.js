import React, { useRef,useEffect, useState }  from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { motion,useViewportScroll} from "framer-motion";
import {FormControl,IconButton, InputAdornment,Input,InputLabel, Button, Box, TextField, Grid, Container, createMuiTheme, responsiveFontSizes, ThemeProvider, Typography, makeStyles} from '@material-ui/core';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function InfoContainer()  {
  const useStyles = makeStyles({
    InfoBox:{
      color: "white",
      width: "40%",
      minWidth: "320px",
    },
    InfoImg: {
      pointerEvents: "none",
      backgroundSize: 'contain',
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      minWidth: "320px",
    },
    InfoBoxContainer: {
      marginTop: "100px",
      marginBottom: "40px"
    },
  });
  useEffect(() => {
    GsapFunc();
  })

  function GsapFunc(){
    let tl1 = gsap.timeline({
      scrollTrigger: {
        id: `tl1`,
        trigger: '#InfoBoxContainer1',
        start: "top 55%",
        toggleActions: "play none none reverse"
      }
    });
    tl1.from("#InfoBoxContainerImg1", {y:200, opacity:0, duraiton:2})
      .from("#InfoBoxContainerTitle1", {y:-200, opacity:0, duraiton:2}, "<")
      .from("#InfoBoxContainerInfo1", {y:300, opacity:0, duraiton:2},"<")
    let tl2 = gsap.timeline({
      scrollTrigger: {
        id: `tl2`,
        trigger: '#InfoBoxContainer2',
        start: "top 60%",
        toggleActions: "play none none reverse"
      }
    });
    tl2.from("#InfoBoxContainerImg2", {y:200, opacity:0, duraiton:2})
      .from("#InfoBoxContainerTitle2", {y:-200, opacity:0, duraiton:2}, "<")
      .from("#InfoBoxContainerInfo2", {y:300, opacity:0, duraiton:2},"<")
    let tl3 = gsap.timeline({
      scrollTrigger: {
        id: `tl3`,
        trigger: '#InfoBoxContainer3',
        start: "top 60%",
        toggleActions: "play none none reverse"
      }
    });
    tl3.from("#InfoBoxContainerImg3", {y:200, opacity:0, duraiton:2})
      .from("#InfoBoxContainerTitle3", {y:-200, opacity:0, duraiton:2}, "<")
      .from("#InfoBoxContainerInfo3", {y:50, opacity:0, duraiton:2},"<")
  }
  const classes = useStyles();
  return (
    <section>
      <div 
        id="InfoBoxContainer1"
        className={classes.InfoBoxContainer} 
        style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}
      >
        <div className={classes.InfoBox}>
          <div
            id="InfoBoxContainerTitle1"
            style={{margin: "20px 0px", textAlign: "center"}}>
            <Typography variant="h5">コラムの一読</Typography>
            <Typography  variant="h6">単語のルールを理解する</Typography>
          </div>
          <div
            id="InfoBoxContainerInfo1"
          >
            <p>アプリ内のコラムを読み英単語に関するルールを理解してください。</p>
            <div style={{textAlign: "center"}}><p>incorrect「不確かな」</p></div>
            <p>
              という単語を思い浮かべて見てください。周知の通り単語の頭に「in-」がくると否定の意味を表しますよね。
            </p>
            <p>
              接頭辞、接尾辞の意味を理解しながら単語を確認すれば爆発的に覚えやすくなります。
              コラムを読むことでこのような英単語のパターンやルールを理解してください。丸暗記は無理です。
            </p>
          </div>
        </div>
        <div 
          id="InfoBoxContainerImg1"
          className={classes.InfoImg} 
          style={{
            filter: "drop-shadow(0 0 10px black)",
            width: "40%",
            height: "20rem",
            backgroundImage: "url('../../static/top/info1.png')"}}/>
      </div>

      <div
        id="InfoBoxContainer2" 
        className={classes.InfoBoxContainer} 
        style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",flexDirection:"row-reverse"}}
      >
        <div className={classes.InfoBox}>
          <div 
            id="InfoBoxContainerTitle2"
            style={{margin: "20px 0px", textAlign: "center"}}>
            <Typography variant="h5">テスト機能の活用</Typography>
            <Typography variant="h6">InputとOutputの両立</Typography>
          </div>
          <div id="InfoBoxContainerInfo2">
            <p>
              アプリ内のテスト機能を活用することでInputとOutputの組み合わせを意識してください。
            </p>
            <p>
              単語を確認し理解することは「Input」にあたります。Inputしただけでは覚えられません。数時間後には50%くらいは忘れているでしょう。
            </p>
            <p>
              そこでこのアプリケーションのテスト機能を使用し「Output」をすることで覚えられているかどうか確認します。
              「Input」した単語が全て正解できるまで続けましょう。全部正解できたらひとまず合格です。隙間時間に間違えた単語は何度も確認しましょう。
            </p>
          </div>
        </div>
        <div
        id="InfoBoxContainerImg2"
        className={classes.InfoImg} style={{filter: "drop-shadow(0 0 10px black)",width: "40%",height: "20rem",backgroundImage: "url('../../static/top/info2.png')"}}/>
      </div>
      <div  
        id="InfoBoxContainer3" 
        className={classes.InfoBoxContainer} 
        style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}
      >
        <div className={classes.InfoBox}>
          <div
           id="InfoBoxContainerTitle3" 
           style={{margin: "20px 0px", textAlign: "center"}}>
             <Typography variant="h5">リマインド機能ON</Typography>
            <Typography  variant="h6">適切なタイミングでの復習</Typography>
          </div>
          <div id="InfoBoxContainerInfo3">
            <p>
              リマインド機能をオンにして徹底的かつ効率的に復習しましょう。
            </p>
            <p>
              右のグラフを見てください。これはエビングハウスの忘却曲線です。学んだ直後から物忘れは始まります。
              復習をしなければ６日後には２５％の情報しか頭の中に残っていません。そのためできるだけ速いペースで全単語のOutputを終わらせ2周目に入りましょう。
              少なくともテスト機能は3周以上しましょう。もちろん正解した単語も不正解した単語もどちらもです。
            </p>
            <p>
              アプリ内でリマインド機能をオンにすると忘却曲線を基に復習し忘れている箇所を適宜報告してくれます。
            </p>
          </div>
        </div>
        <div 
        id="InfoBoxContainerImg3"
        className={classes.InfoImg} style={{filter: "drop-shadow(0 0 10px black)",width: "40%",height: "22rem",backgroundImage: "url('../../static/top/info3.png')"}}/>
      </div>
    </section>
  );
}

