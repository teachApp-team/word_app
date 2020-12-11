import React, {  useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, CardActionArea, CardContent, Typography, Container, Button, CardActions, List, ListItem, ListItemText} from '@material-ui/core';


export default function EachData() {
  return(
    <Container style={{display: "flex",flexWrap: "wrap"}}>
      <Card style={{width: "40%", maxWidth: "200px", margin:"10px auto", backgroundColor:"#EEEEEE"}}>
        <CardContent style={{textAlign: "center", padding:"20px"}}>
          <div style={{fontSize: "13px"}}>
            今週の習得数
          </div>
          <div style={{fontSize: "13px"}}>
            100単語
          </div>
        </CardContent>
      </Card>
      <Card style={{width: "40%", maxWidth: "200px", margin:"10px auto", backgroundColor:"#EEEEEE"}}>
        <CardContent  style={{textAlign: "center", padding:"20px"}}>
          <div style={{fontSize: "13px"}}>
            累計習得数
          </div>
          <div style={{fontSize: "13px"}}>
            100単語
          </div>
        </CardContent>
      </Card>
      <Card style={{width: "40%", maxWidth: "200px", margin:"10px auto", backgroundColor:"#EEEEEE"}}>
        <CardContent  style={{textAlign: "center", padding:"20px"}}>
          <div style={{fontSize: "13px"}}>
            今日の習得数
          </div>
          <div style={{fontSize: "13px"}}>
            100単語
          </div>
        </CardContent>
      </Card>
    </Container>
  );
}