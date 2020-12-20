import React, { useEffect, useState } from 'react';
import {Select, Container,Grid, Button, CardContent, Card} from '@material-ui/core';
import { PieChart } from 'react-minimal-pie-chart';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import axios from 'axios';


export default function EachLevelInfo(props) {
  console.log(props.id)
  let iniActiveLevel = { 
    id: 0,
    name: "level1",
    correct:30,
    wrong:20,
    not_yet:50,
  };
  const [activeLevel, setIniActiveLevel] = useState(iniActiveLevel);

  useEffect(() => {
    axios.get("http://localhost:8000/api/v1/levels/"+ String(props.id)).then( res => {
    console.log('レベルデータ取得');
    console.log(res.data);
    setIniActiveLevel(res.data);
    })
  }, []);

  console.log("EachLevelInfoレンダー");
  return(
    <Container disableGutters={true} style={{maxWidth: "550px", textAlign:"center"}}>
      <div style={{textAlign: "center", marginBottom:"30px"}}>
        <span>{props.level}</span>
      </div>
      <Grid container spacing={1} style={{textAlign: "center"}}>
        <Grid item xs={3}>
          <InputLabel id="label" style={{fontSize: "12px"}}>単語数</InputLabel>
          <Select labelId="label" id="select" value="10"  style={{fontSize: "13px"}}>
            <MenuItem value="10" style={{fontSize: "12px"}}>10単語</MenuItem>
            <MenuItem value="20" style={{fontSize: "12px"}}>20単語</MenuItem>
            <MenuItem value="30" style={{fontSize: "12px"}}>30単語</MenuItem>
            <MenuItem value="40" style={{fontSize: "12px"}}>40単語</MenuItem>
            <MenuItem value="50" style={{fontSize: "12px"}}>50単語</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Button variant="contained" color="secondary" >
            総復習
          </Button> 
        </Grid>
        <Grid item xs={3}>
          <Button className="wrong-button" variant="contained" color="primary" >
            不正解
          </Button> 
        </Grid>
        <Grid item xs={3}>
          <Button className="yet-button" variant="contained" color="secondary" >
            未学習
          </Button> 
        </Grid>
      </Grid>

      <Card style={{margin:"4% auto", paddingBottom:"7%", backgroundColor:"#EEEEEE",maxWidth: "450px"}}>
        <Grid container direction="column" justify="flex-start"  spacing={1} style={{marginTop:"2%"}}>
          <Grid item sm={12}>
            <div style={{display:"flex",justifyContent: "center"}}>
              <div style={{margin:"15px 1% 0px 1%", color:"red", fontSize:"13px"}}>正解 10問</div>
              <div style={{margin:"15px 1% 0px 1%", color:'blue', fontSize:"13px"}}>不正解 15問</div>
              <div style={{margin:"15px 1% 0px 1%", color:'#333333', fontSize:"13px"}}>未学習 20問</div>
            </div>
          </Grid>
          <Grid item xs={12} style={{margin:"auto"}}>
            <PieChart  startAngle= {270} data ={[
              { title: '正解', value: activeLevel.correct, color: '#C13C37' },
              { title: '不正解', value: activeLevel.wrong, color: 'blue' },
              { title: '未学習', value: activeLevel.not_yet, color: 'grey' },
            ]}
            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
            animate ={true}
            animationDuration ={400}
            style={{fontSize: "8px", maxWidth: "180px", minWidth: "170px"}}
            />
          </Grid>
        </Grid> 
      </Card>
    </Container>
  );
}