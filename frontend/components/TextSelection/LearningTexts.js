import React from 'react';
import {Typography, Button, CardContent, CardMedia, Card, CardActionArea,CardActions} from '@material-ui/core';
import Link from 'next/link';

export default function LearningTexts() {
  return(
    <div style={{overflowX:"auto", width:"100%", display: "flex", overflowScrolling: "touch", padding:"10px" }}>
      <Card style={{display:"inline-block", maxWidth: "200px", flexShrink: 0, marginRight: "30px"}}>
        <CardActionArea>
          <CardContent>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/static/texts/text1.jpg"
              title="Contemplative Reptile"
            />
            <Typography gutterBottom variant="h6" component="h5">
              ターゲット英熟語
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              1000個の英熟語が収録されています。受験生の間で差がつくのが英熟語です。
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="display-center">
          <Link href='/textInfo' >
            <Button style={{margin: "auto"}}  size="small" color="primary">学習する</Button>
          </Link>
        </CardActions>
      </Card>
      <Card style={{display:"inline-block", maxWidth: "200px", flexShrink: 0}}>
        <CardActionArea>
          <CardContent>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="140"
              image="/static/texts/text.jpg"
              title="Contemplative Reptile"
            />
            <Typography gutterBottom variant="h6" component="h5">
              ターゲット英熟語
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              1000個の英熟語が収録されています。受験生の間で差がつくのが英熟語です。
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="display-center">
          <Link href='/textInfo' >
            <Button style={{margin: "auto"}}  size="small" color="primary">学習する</Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
}