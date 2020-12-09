import React, { Component } from 'react';
import {Select, Container,Grid,Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions, Paper} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faMedal, faPencilAlt, faCommentDots, faUser} from "@fortawesome/free-solid-svg-icons";
import { makeStyles, withTheme } from '@material-ui/core/styles';
import { ProgressBar } from 'react-bootstrap';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { PieChart } from 'react-minimal-pie-chart';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';


export default function EachLevelInfo(props) {
  return(
    <Container disableGutters={true} style={{maxWidth: "550px", textAlign:"center"}}>
      <div style={{textAlign: "center", marginBottom:"30px"}}><h4>{props.level}</h4></div>
      <Grid container spacing={1} style={{textAlign: "center"}}>
        <Grid item xs={3}>
          <InputLabel id="label">単語数</InputLabel>
          <Select labelId="label" id="select" value="10">
            <MenuItem value="10">10単語</MenuItem>
            <MenuItem value="20">20単語</MenuItem>
            <MenuItem value="30">30単語</MenuItem>
            <MenuItem value="40">40単語</MenuItem>
            <MenuItem value="50">50単語</MenuItem>
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
        <Grid container direction="column" justify="flex-start"  alignItems="stretc" spacing={1} style={{marginTop:"2%"}}>
          <Grid item sm={12}>
            <div style={{display:"flex",justifyContent: "center"}}>
              <div style={{margin:"15px 1% 0px 1%", color:"red"}}>正解 10問</div>
              <div style={{margin:"15px 1% 0px 1%", color:'blue'}}>不正解 15問</div>
              <div style={{margin:"15px 1% 0px 1%", color:'#333333'}}>未学習 20問</div>
            </div>
          </Grid>
          <Grid item xs={12} style={{margin:"auto"}}>
            <PieChart  startAngle= {270} data ={[
              { title: '正解', value: 10, color: '#C13C37' },
              { title: '不正解', value: 15, color: 'blue' },
              { title: '未学習', value: 20, color: 'grey' },
            ]}
            label={({ dataEntry }) => `${Math.round(dataEntry.percentage)} %`}
            animate ={true}
            animationDuration ={400}
            style={{fontSize: "8px", maxWidth: "200px"}}
            />
          </Grid>
        </Grid> 
      </Card>
    </Container>
  );
}