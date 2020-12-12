import React, {  useState } from 'react';
import { Bar, Pie } from 'react-chartjs-2';
import { Card, CardActionArea, CardContent, Typography, Container, Button, CardActions, List, ListItem, ListItemText} from '@material-ui/core';


export default function EachData() {
  return(
    <Container style={{display: "flex",flexWrap: "wrap"}}>
      <Card style={{width: "40%", maxWidth: "200px", margin:"10px auto", backgroundColor:"#EEEEEE"}}>
        <CardActionArea>
          <CardContent style={{textAlign: "center"}}>
            <Typography variant="body2" component="p">
              今週の習得数
            </Typography>
            <Typography variant="body2" component="p">
              100単語
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card style={{width: "40%", maxWidth: "200px", margin:"10px auto", backgroundColor:"#EEEEEE"}}>
        <CardActionArea>
          <CardContent  style={{textAlign: "center"}}>
            <Typography variant="body2" component="p">
              累計習得数
            </Typography>
            <Typography variant="body2" component="p">
              100単語
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Card style={{width: "40%", maxWidth: "200px", margin:"10px auto", backgroundColor:"#EEEEEE"}}>
        <CardActionArea>
          <CardContent  style={{textAlign: "center"}}>
            <Typography variant="body2" component="p">
              今日の習得数
            </Typography>
            <Typography variant="body2" component="p">
              100単語
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Container>
  );
}